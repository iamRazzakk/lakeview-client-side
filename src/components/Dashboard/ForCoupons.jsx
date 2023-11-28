import useAxiosSecure from "../Hook/useAxiosSecure";
import { Swal } from 'sweetalert2';


const ForCoupons = () => {
    const axiosSecure = useAxiosSecure()
    const handleAddCoupon = (e) => {
        e.preventDefault();
        const form = e.target;
        const code = form.code.value;
        const Discount = form.Discount.value;
        const description = form.description.value;

        const CouponCode = {
            Description: description,
            Code: code,
            Discount: Discount,
        };
        console.log(CouponCode);
        axiosSecure.post('/coupon', CouponCode)
            .then(res => {
                console.log(res.data);
                if (res.data.acknowledged) {
                    Swal.fire({
                        position: "center",
                        icon: "success",
                        title: "Agreement request successfully",
                        showConfirmButton: false,
                        timer: 1000
                    });
                }
            })
            .catch(error => {
                console.error("Error:", error);
            });
    }
    return (
        <div>
            <div className="w-full mx-auto p-6 rounded text-white">
                <form onSubmit={handleAddCoupon} className="card-body bg-slate-300">
                    <div className="form-control">
                        <label className="label">
                            <span className="label-text">coupon code</span>
                        </label>
                        <input type="text" name="code" placeholder="Code" className="input input-bordered" required />
                    </div>
                    <div className="form-control">
                        <label className="label">
                            <span className="label-text">Discount percentage</span>
                        </label>
                        <input type="text" name="Discount" placeholder="Coupon" className="input input-bordered" required />
                    </div>
                    <div className="form-control">
                        <label className="label">
                            <span className="label-text">Coupon description</span>
                        </label>
                        <input type="text" name="description" placeholder="coupon description" className="input input-bordered" required />
                    </div>
                    <div className="form-control mt-6">
                        <button className="btn">
                            <input type="submit" value="Submit" />
                        </button>
                    </div>
                </form>
            </div>
        </div>
    );
};

export default ForCoupons;