"use client";

import { useState } from "react";
import { CopyPlus, Save, Trash2 } from "lucide-react";

export default function AdminDashboard({ initialData }: { initialData: any }) {
  const [data, setData] = useState(initialData);
  const [isDeploying, setIsDeploying] = useState(false);
  const [isSavingLocal, setIsSavingLocal] = useState(false);
  const [activeVenue, setActiveVenue] = useState<"lounge" | "restaurant">("lounge");

  const saveLocally = async () => {
    setIsSavingLocal(true);
    try {
      const res = await fetch("/api/save-local", {
        method: "POST",
        headers: { "Content-Type": "application/json" },
        body: JSON.stringify(data),
      });
      const result = await res.json();
      if (!res.ok) throw new Error(result.error);
      alert(result.message);
    } catch (err: any) {
      alert("Failed to save locally: " + err.message);
    } finally {
      setIsSavingLocal(false);
    }
  };

  const publishToGithub = async () => {
    if (!confirm("Are you ready to push this to GitHub and deploy?")) return;
    setIsDeploying(true);
    try {
      const res = await fetch("/api/save-menu", {
        method: "POST",
        headers: { "Content-Type": "application/json" },
        body: JSON.stringify(data),
      });
      const result = await res.json();
      if (!res.ok) throw new Error(result.error);
      alert(result.message);
    } catch (err: any) {
      alert("Failed to publish: " + err.message);
    } finally {
      setIsDeploying(false);
    }
  };

  const handleItemChange = (venue: string, catIndex: number, itemIndex: number, field: string, value: string) => {
    const newData = { ...data };
    newData[venue].categories[catIndex].items[itemIndex][field] = value;
    setData(newData);
  };

  const deleteItem = (venue: string, catIndex: number, itemIndex: number) => {
    if (!confirm("Remove this item?")) return;
    const newData = { ...data };
    newData[venue].categories[catIndex].items.splice(itemIndex, 1);
    setData(newData);
  };

  const addItem = (venue: string, catIndex: number) => {
    const newData = { ...data };
    newData[venue].categories[catIndex].items.push({
      id: `${venue.charAt(0)}-new-${Math.random().toString(36).substr(2, 6)}`,
      name: "New Item",
      price: "0",
      description: "",
    });
    setData(newData);
  };

  return (
    <div className="min-h-screen bg-[#0b0b0b] text-[#f5f5f5] p-6 lg:p-12 font-satoshi">
      <div className="max-w-6xl mx-auto">
        <header className="flex flex-col sm:flex-row justify-between items-start sm:items-center mb-8 gap-4 border-b border-white/10 pb-6">
          <div>
            <h1 className="text-3xl font-playfair mb-2 text-[#f4ef0e]">Lounge Admin</h1>
            <p className="text-white/60">Edit menu items, preview locally, and push to Git</p>
          </div>
          <div className="flex gap-3">
            {process.env.NODE_ENV === "development" && (
              <button
                onClick={saveLocally}
                disabled={isSavingLocal || isDeploying}
                className="flex items-center gap-2 bg-white/10 text-white border border-white/20 px-6 py-3 rounded hover:bg-white/20 transition-colors disabled:opacity-50 font-medium"
              >
                <Save size={18} />
                {isSavingLocal ? "Saving..." : "Save Locally"}
              </button>
            )}

            <button
              onClick={publishToGithub}
              disabled={isSavingLocal || isDeploying}
              className="flex items-center gap-2 bg-[#f4ef0e] text-black px-6 py-3 rounded hover:bg-[#d6d20c] transition-colors disabled:opacity-50 font-medium"
            >
              <Save size={18} />
              {isDeploying ? "Deploying..." : "Save"}
            </button>
          </div>
        </header>

        <div className="flex gap-4 mb-8">
          {(["lounge", "restaurant"] as const).map((venue) => (
            <button
              key={venue}
              onClick={() => setActiveVenue(venue)}
              className={`px-6 py-2 rounded capitalize font-medium transition-colors ${
                activeVenue === venue ? "bg-white/10 text-[#f4ef0e]" : "text-white/60 hover:text-white"
              }`}
            >
              {venue} Menu
            </button>
          ))}
        </div>

        <div className="space-y-12">
          {data[activeVenue].categories.map((category: any, catIndex: number) => (
            <div key={catIndex} className="bg-white/5 rounded-xl border border-white/10 p-6">
              <div className="flex justify-between items-center mb-6">
                <h2 className="text-xl font-playfair">{category.title}</h2>
                <button
                  onClick={() => addItem(activeVenue, catIndex)}
                  className="flex items-center gap-2 text-[#f4ef0e] hover:text-white transition-colors text-sm"
                >
                  <CopyPlus size={16} /> Add Item
                </button>
              </div>

              <div className="space-y-4">
                {category.items.map((item: any, itemIndex: number) => (
                  <div key={itemIndex} className="flex flex-col sm:flex-row gap-4 bg-black/40 p-4 rounded-lg">
                    <div className="flex-1 space-y-3">
                      <div className="flex gap-4">
                        <div className="flex-1">
                          <label className="block text-xs text-white/50 mb-1">Name</label>
                          <input
                            type="text"
                            value={item.name}
                            onChange={(e) => handleItemChange(activeVenue, catIndex, itemIndex, "name", e.target.value)}
                            className="w-full bg-white/5 border border-white/10 rounded px-3 py-2 outline-none focus:border-[#f4ef0e]"
                          />
                        </div>
                        <div className="w-32">
                          <label className="block text-xs text-white/50 mb-1">Price</label>
                          <input
                            type="text"
                            value={item.price}
                            onChange={(e) => handleItemChange(activeVenue, catIndex, itemIndex, "price", e.target.value)}
                            className="w-full bg-white/5 border border-white/10 rounded px-3 py-2 outline-none focus:border-[#f4ef0e]"
                          />
                        </div>
                      </div>
                      <div>
                        <label className="block text-xs text-white/50 mb-1">Description (Optional)</label>
                        <textarea
                          value={item.description || ""}
                          onChange={(e) => handleItemChange(activeVenue, catIndex, itemIndex, "description", e.target.value)}
                          className="w-full bg-white/5 border border-white/10 rounded px-3 py-2 outline-none focus:border-[#f4ef0e] h-20 resize-none text-sm"
                        />
                      </div>
                    </div>
                    <div className="flex sm:flex-col justify-end">
                      <button
                        onClick={() => deleteItem(activeVenue, catIndex, itemIndex)}
                        className="p-2 text-red-400 hover:bg-white/5 rounded transition-colors"
                        title="Delete Item"
                      >
                        <Trash2 size={18} />
                      </button>
                    </div>
                  </div>
                ))}
              </div>
            </div>
          ))}
        </div>
      </div>
    </div>
  );
}
