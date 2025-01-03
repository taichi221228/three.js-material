import "./style.css";

import {
	Mesh,
	MeshBasicMaterial,
	MeshNormalMaterial,
	TorusGeometry,
} from "three";
import { setup } from "./setup.ts";

const { camera, renderer, scene } = setup();

const geometry = new TorusGeometry(40, 15);
const color = 0x6699ff;
const materials = [new MeshBasicMaterial({ color }), new MeshNormalMaterial()];
const meshes = [];

for (const [index, material] of materials.entries()) {
	const mesh = new Mesh(geometry, material);
	mesh.position.x = index * 120;
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
