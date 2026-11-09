varying vec2 vPaletteUv;
void main() {
    vPaletteUv = uv;
    gl_Position = projectionMatrix * modelViewMatrix * vec4(position, 1.0);
}
