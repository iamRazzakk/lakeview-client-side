import { useQuery } from "@tanstack/react-query";
import useAxiosSecure from "../Hook/useAxiosSecure";
import '../Home/Cupon.css'

const ForCupon = () => {
    const axiosSecure = useAxiosSecure();
    const { data: Coupons = [] } = useQuery({
        queryKey: ["coupon"],
        queryFn: async () => {
            const res = await axiosSecure.get("/coupon");
            return res.data;
        },
    });
    console.log(Coupons);

    return (
        <div className="flex font-Poppins flex-wrap justify-around">
            {Coupons.map((coupon, index) => (
            <div
                    key={index}
                    className="coupon-card bg-gray-600 text-white p-4 rounded-lg shadow-md w-64 h-40 m-4"
                >
                    <h2 className="text-xl font-bold mb-3">{coupon.Code}</h2>
                    <p className="text-white text-sm">{coupon.Description}</p>
                    <p>Discount: {coupon.Discount}</p>
                </div>
            ))}
        </div>
    );
};

export default ForCupon;