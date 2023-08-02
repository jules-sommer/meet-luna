export const CubeLoader = ({ colour } : { colour: "indigo" | "cyan" | "orange" }) => {

    let skCube: string;
    let skCubeParent: string;

    if( colour === "indigo" ) {
        skCubeParent = "bg-green-400";
        skCube = "before:bg-indigo-400";
    } else if( colour === "cyan" ) {
        skCubeParent = "bg-green-400";
        skCube = "before:bg-cyan-400";
    } else if( colour === "orange" ) {
        skCubeParent = "bg-green-400";
        skCube = "before:bg-orange-400";
    } else {
        skCubeParent = "";
        skCube = "";
    }

    return (

        <div class={`sk-folding-cube ${skCubeParent}`}>
            <div class={`sk-cube4 sk-cube ${skCube}`}></div>
            <div class={`sk-cube1 sk-cube ${skCube}`}></div>
            <div class={`sk-cube2 sk-cube ${skCube}`}></div>
            <div class={`sk-cube3 sk-cube ${skCube}`}></div>
        </div>

    )

}