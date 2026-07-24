const Footer = () => {
  return (
    <footer className="border-t border-slate-200/80 bg-white/55 py-10">
      <div className="section-shell flex flex-col gap-6 sm:flex-row sm:items-end sm:justify-between">
        <div>
          <p className="text-lg font-semibold text-slate-900">Kartik Agarwal</p>
          <p className="mt-1 max-w-xl text-sm text-slate-600">
            Alpha quant researcher working across systematic investing, macro research, machine learning, and
            production-grade research systems.
          </p>
        </div>
        <nav aria-label="Profile links" className="flex flex-wrap gap-x-5 gap-y-2 text-sm font-semibold">
          <a href="mailto:kartikagarwal777@gmail.com" className="text-slate-600 hover:text-cyan-800">
            Email
          </a>
          <a
            href="https://www.linkedin.com/in/kartik-agarwal/"
            target="_blank"
            rel="me noopener noreferrer"
            className="text-slate-600 hover:text-cyan-800"
          >
            LinkedIn
          </a>
          <a
            href="https://kartikag.substack.com"
            target="_blank"
            rel="me noopener noreferrer"
            className="text-slate-600 hover:text-cyan-800"
          >
            Substack
          </a>
          <a href="/Kartik_Agarwal.pdf" className="text-slate-600 hover:text-cyan-800">
            Resume
          </a>
        </nav>
      </div>
    </footer>
  );
};

export default Footer;
