import React, { useState } from "react";
import { useLocation, useNavigate } from "react-router-dom";
const GOOGLE_MAPS_API_KEY = "AIzaSyA__nYMBES6nx5KnWYpPMXOG04LtDuIigY";

const Order = () => {
    const { state } = useLocation();
    const navigate = useNavigate();

    const perfume = state?.perfume || {};
    const quantity = state?.quantity || 1;
    const totalPrice = state?.totalPrice || 0;

    const [form, setForm] = useState({
        name: "",
        phone: "",
        colony: "",
        address: "",
        location: "",
        landmark: ""
    });

    const [loadingLocation, setLoadingLocation] = useState(false);
    const [locationError, setLocationError] = useState("");

    const handleChange = (e) => {
        setForm({ ...form, [e.target.name]: e.target.value });
    };

    const extractCityFromAddressComponents = (components) => {
        if (!components) return "";
        const cityObj = components.find(
            (c) =>
                c.types.includes("locality") ||
                c.types.includes("administrative_area_level_2") ||
                c.types.includes("postal_town")
        );
        return cityObj?.long_name || "";
    };

    const fetchCurrentLocation = () => {
        if (!navigator.geolocation) {
            setLocationError("Geolocation is not supported by your browser");
            return;
        }

        setLoadingLocation(true);
        setLocationError("");

        navigator.geolocation.getCurrentPosition(
            async (position) => {
                const { latitude, longitude } = position.coords;

                try {
                    const res = await fetch(
                        `https://maps.googleapis.com/maps/api/geocode/json?latlng=${latitude},${longitude}&key=${GOOGLE_MAPS_API_KEY}`
                    );
                    const data = await res.json();

                    if (data.status === "OK" && data.results.length > 0) {
                        const address = data.results[0]?.formatted_address || "";
                        const city = extractCityFromAddressComponents(data.results[0].address_components);

                        setForm((prev) => ({
                            ...prev,
                            address,
                            location: city
                        }));

                        setLocationError("");
                    } else {
                        await fetchAddressFromOSM(latitude, longitude);
                    }
                } catch (error) {
                    await fetchAddressFromOSM(latitude, longitude);
                }

                setLoadingLocation(false);
            },
            (error) => {
                setLocationError("Permission denied or unable to get location");
                setLoadingLocation(false);
            }
        );
    };

    const fetchAddressFromOSM = async (lat, lon) => {
        try {
            const res = await fetch(
                `https://nominatim.openstreetmap.org/reverse?format=json&lat=${lat}&lon=${lon}`
            );
            const data = await res.json();

            const address = data.display_name || "";
            const city =
                data.address?.city ||
                data.address?.town ||
                data.address?.village ||
                data.address?.county ||
                "";

            setForm((prev) => ({
                ...prev,
                address,
                location: city
            }));

            setLocationError("");
        } catch (err) {
            setLocationError("Failed to get address from location");
        }
    };

    const handleSubmit = (e) => {
        e.preventDefault();

        const { name, phone, address, location, colony, landmark } = form;
        if (!name || !phone || !address || !location || !colony || !landmark) {
            alert("Please fill all fields.");
            return;
        }

        // ✅ Play Success Sound
        // const audio = new Audio("/sounds/success.mp3"); // put file in public/sounds/
        const audio = new Audio("/sound.wav"); // put file in public/sounds/
        audio.play().catch(err => console.log("Sound play blocked:", err));

        // ✅ Navigate with data
        navigate("/shop/buy-product/success", {
            state: {
                perfume,
                quantity,
                totalPrice,
                customer: form
            }
        });
    };

    return (
        <div className="container">
            <div className="row">
                <div className="min-h-screen bg-purple-50 px-4 py-10 flex items-start justify-center">
                    <div className="bg-white rounded-xl shadow-lg flex flex-col md:flex-row w-full max-w-5xl overflow-hidden">
                        
                        {/* Order Summary */}
                        <div className="md:w-1/2 p-6 border-b md:border-b-0 md:border-r border-gray-200">
                            <h2 className="text-2xl font-bold text-purple-800 mb-4">Order Summary</h2>
                            <img
                                src={perfume?.images?.[0]}
                                alt={perfume?.name}
                                className="w-full h-60 object-contain rounded-md mb-4"
                            />
                            <p className="text-xl font-semibold text-purple-700">{perfume.name}</p>
                            <p className="text-gray-600">Brand: {perfume.brand}</p>
                            <p className="text-gray-600">Volume: {perfume.volume}</p>
                            <p className="text-gray-600">Quantity: {quantity}</p>
                            <p className="text-lg font-bold text-purple-800 mt-2">Total: ₹{totalPrice}</p>
                        </div>

                        {/* Delivery Form */}
                        <form onSubmit={handleSubmit} className="md:w-1/2 p-6 space-y-4">
                            <h2 className="text-2xl font-bold text-purple-800 flex items-center justify-between">
                                Delivery Info
                                <button
                                    type="button"
                                    onClick={fetchCurrentLocation}
                                    disabled={loadingLocation}
                                    className="bg-purple-600 text-white px-3 py-1 rounded hover:bg-purple-700 text-sm"
                                >
                                    {loadingLocation ? "Getting Location..." : "Use Current Location"}
                                </button>
                            </h2>

                            {locationError && <p className="text-red-600 text-sm">{locationError}</p>}

                            <input
                                name="name"
                                type="text"
                                placeholder="Full Name"
                                value={form.name}
                                onChange={handleChange}
                                className="w-full border p-2 rounded"
                                required
                            />

                            <input
                                name="phone"
                                type="text"
                                placeholder="Contact Number"
                                value={form.phone}
                                onChange={handleChange}
                                className="w-full border p-2 rounded"
                                required
                            />

                            <input
                                name="colony"
                                type="text"
                                placeholder="Village / Colony / House No."
                                value={form.colony}
                                onChange={handleChange}
                                className="w-full border p-2 rounded"
                                required
                            />

                            <textarea
                                name="address"
                                placeholder="Full Address"
                                value={form.address}
                                onChange={handleChange}
                                className="w-full border p-2 rounded"
                                required
                            />

                            <input
                                name="location"
                                type="text"
                                placeholder="City / Location"
                                value={form.location}
                                onChange={handleChange}
                                className="w-full border p-2 rounded"
                                required
                            />

                            <input
                                name="landmark"
                                type="text"
                                placeholder="Near By Place / Landmark"
                                value={form.landmark}
                                onChange={handleChange}
                                className="w-full border p-2 rounded"
                                required
                            />

                            <button
                                type="submit"
                                className="w-full bg-purple-600 text-white py-2 rounded hover:bg-purple-700"
                            >
                                Place Order
                            </button>
                        </form>
                    </div>
                </div>
            </div>
        </div>
    );
};

export default Order;
