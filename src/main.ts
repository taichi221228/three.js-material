import "./style.css";
import { setup } from "./setup.ts";

const { camera, renderer, scene } = setup();

(function render() {
	requestAnimationFrame(render);
	renderer.render(scene, camera);
})();
