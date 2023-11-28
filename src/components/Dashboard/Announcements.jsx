import useAxiosSecure from "../Hook/useAxiosSecure";
import { Swal } from 'sweetalert2';


const Announcements = () => {
    const axiosSecure = useAxiosSecure()
    const handleAgrement = (e) => {
        e.preventDefault();
        const form = e.target;
        const title = form.Title.value;
        const announcement = form.Announcement.value;
        const announcements = {
            Title: title,
            Announcement: announcement,
        };

        axiosSecure.post('/announcements', announcements)
            .then(res => {
                console.log(res.data);
                if (res.data.acknowledged) {
                    Swal.fire({
                        position: "center",
                        icon: "success",
                        title: "Agreement request successfully",
                        showConfirmButton: false,
                        timer: 2500
                    });
                }
            })
            .catch(error => {
                console.error("Error:", error);
            });


    }
    return (
        < div >
            <h1 className="text-2xl font-bold text-center uppercase">
                Owner  Announcements
            </h1>
            <div className="hero min-h-screen text-white">
                <div className="hero-content flex-col lg:flex-row-reverse">
                    <div className="card shrink-0 w-full max-w-sm shadow-2xl bg-base-100">
                        <form onSubmit={handleAgrement} className="card-body bg-slate-300">
                            <div className="form-control">
                                <label className="label">
                                    <span className="label-text">Title</span>
                                </label>
                                <input type="text" name="Title" placeholder="Title" className="input input-bordered" required />
                            </div>
                            <div className="form-control">
                                <label className="label">
                                    <span className="label-text">Announcement</span>
                                </label>
                                <input type="text" name="Announcement" placeholder="Announcement description" className="input input-bordered" required />
                            </div>
                            <div className="form-control mt-6">
                                <button className="btn">
                                    <input type="submit" value="Submit" />
                                </button>
                            </div>
                        </form>
                    </div>
                </div>
            </div>

        </div >
    );
};

export default Announcements;
// announcements