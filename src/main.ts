import "./style.css";

import { Mesh, MeshBasicMaterial, TorusGeometry } from "three";
import { setup } from "./setup.ts";

const { camera, renderer, scene } = setup();

const geometry = new TorusGeometry(40, 15);
const materials = [new MeshBasicMaterial({ color: 0x6699ff })];
const meshes = [];

for (const material of materials) {
	const mesh = new Mesh(geometry, material);
	meshes.push(mesh);
	scene.add(mesh);
}

(function render() {
	requestAnimationFrame(render);

	for (const mesh of meshes) {
		mesh.rotation.x += 0.025;
		mesh.rotation.y += 0.025;
	}

	renderer.render(scene, camera);
})();
