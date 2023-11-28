import { useQuery } from "@tanstack/react-query";
import useAxiosSecure from "../Hook/useAxiosSecure";

const AllAnnouncements = () => {
    const axiosSecure = useAxiosSecure();
    const { data: Announcements = [] } = useQuery({
        queryKey: ["announcements"],
        queryFn: async () => {
            const res = await axiosSecure.get("/announcements");
            return res.data;
        },
    });
    console.log(Announcements);
    return (
        <div>
            <div className="overflow-x-auto p-6">
                <table className="table w-full ">
                    {/* head */}
                    <thead className="bg-black text-white rounded-lg">
                        <tr>
                            <th>No</th>
                            <th>Title</th>
                            <th>Announcement</th>
                        </tr>
                    </thead>
                    <tbody>
                        {Announcements?.map((announcement, index) => <tr key={announcement._id}>
                            <th>{index + 1}</th>
                            <td>{announcement?.Title}</td>
                            <td>{announcement?.Announcement}</td>
                        </tr>)}

                    </tbody>
                </table>
            </div>
        </div>
    );
};

export default AllAnnouncements;