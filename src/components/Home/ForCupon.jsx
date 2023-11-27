

const ForCupon = () => {
    const couponData = [
        { category: "Rent Discounts", title: "Save on Rent", description: "Get a special discount on your next month's rent.", discount: '%20' },
        { category: "Amenities", title: "Free Gym Access", description: "Enjoy complimentary access to the on-site gym facilities.", discount: '%37' },
        { category: "Referral Bonus", title: "Refer a Friend", description: "Refer a friend and receive a bonus on your rent.", discount: '%25' },
        { category: "Amenities", title: "Free Gym Access", description: "Enjoy complimentary access to the on-site gym facilities.", discount: '%35' },

    ];

    return (
        <div className="flex font-Poppins flex-wrap justify-around">
            {couponData.map((coupon, index) => (
                <div
                    key={index}
                    className="bg-gray-600 text-white p-6 rounded-lg shadow-md w-64 h-40 m-4"
                >
                    <h2 className="text-xl font-bold mb-3">{coupon.title}</h2>
                    <p className="text-white">{coupon.description}</p>
                    <p>Discount: {coupon.discount}</p>
                    {/* <button className="mt-4 bg-blue-500 hover:bg-blue-600 text-white py-2 px-4 rounded-md">
                        Apply Now
                    </button> */}
                </div>
            ))}
        </div>
    );
};

export default ForCupon;