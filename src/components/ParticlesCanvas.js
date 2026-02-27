import React, { Component, createRef } from "react";

const COLORS = { amber: "#F5A623", teal: "#00D4AA" };

class ParticlesCanvas extends Component {
  constructor(props) {
    super(props);
    this.canvasRef = createRef();
    this.particles = [];
    this.animId = null;
  }

  componentDidMount() {
    const canvas = this.canvasRef.current;
    if (!canvas) return;
    this.ctx = canvas.getContext("2d");
    this.resize();

    this.particles = Array.from({ length: 70 }, () => ({
      x: Math.random() * canvas.width,
      y: Math.random() * canvas.height,
      r: Math.random() * 1.8 + 0.4,
      dx: (Math.random() - 0.5) * 0.25,
      dy: (Math.random() - 0.5) * 0.25,
      alpha: Math.random() * 0.4 + 0.08,
      color: Math.random() > 0.5 ? COLORS.amber : COLORS.teal,
    }));

    this.draw();
    window.addEventListener("resize", this.resize);
  }

  componentWillUnmount() {
    cancelAnimationFrame(this.animId);
    window.removeEventListener("resize", this.resize);
  }

  resize = () => {
    const canvas = this.canvasRef.current;
    if (!canvas) return;
    canvas.width = window.innerWidth;
    canvas.height = document.documentElement.scrollHeight || window.innerHeight * 5;
  };

  draw = () => {
    const canvas = this.canvasRef.current;
    if (!canvas) return;
    const ctx = this.ctx;
    const w = canvas.width;
    const h = canvas.height;

    ctx.clearRect(0, 0, w, h);
    for (const p of this.particles) {
      ctx.beginPath();
      ctx.arc(p.x, p.y, p.r, 0, Math.PI * 2);
      const hex = Math.round(p.alpha * 255).toString(16).padStart(2, "0");
      ctx.fillStyle = p.color + hex;
      ctx.fill();
      p.x += p.dx;
      p.y += p.dy;
      if (p.x < 0 || p.x > w) p.dx *= -1;
      if (p.y < 0 || p.y > h) p.dy *= -1;
    }
    this.animId = requestAnimationFrame(this.draw);
  };

  render() {
    return (
      <canvas
        ref={this.canvasRef}
        style={{
          position: "fixed",
          top: 0,
          left: 0,
          width: "100%",
          height: "100%",
          pointerEvents: "none",
          zIndex: 0,
        }}
      />
    );
  }
}

export default ParticlesCanvas;
