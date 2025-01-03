import { PerspectiveCamera, Scene, WebGLRenderer } from "three";

export function setup() {
	const size = { width: 1252, height: 864 };
	const renderer = new WebGLRenderer({
		antialias: true,
		canvas: getCanvasElement(),
	});
	renderer.setSize(size.width, size.height);
	renderer.setPixelRatio(window.devicePixelRatio);

	const scene = new Scene();

	const camera = new PerspectiveCamera(60, size.width / size.height);
	camera.position.set(0, 0, 1000);

	return { camera, renderer, scene, size };
}

function getCanvasElement() {
	const app = document.getElementById("app");
	if (!app) throw Error("Application Shell is not found.");
	const canvas = app.querySelector("canvas");
	if (!canvas) throw Error("<canvas /> is not found.");
	return canvas;
}
