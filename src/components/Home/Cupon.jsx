import { Component } from "react";
import Flicking from "@egjs/react-flicking";
import ForCupon from "./ForCupon";


export default class DemoComponent extends Component {
    render() {
        return (
            <div className="w-full mt-12 h-full bg-opacity-50">
                <h1 className="text-3xl font-bold mb-4 font-Poppins md:p-6">Cupon:~</h1>
                <Flicking moveType="freeScroll" bound={true}>
                    <span className="button mr-2 is-white"><ForCupon></ForCupon></span>
                </Flicking>
            </div>
        );
    }
}
