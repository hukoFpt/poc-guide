const Sidebar = () => {
  return (
    <div className="w-1/3 p-4 flex flex-col gap-2">
      <div className="champion-select-button font-aldrich">
        <div className="champion-select-button-content">
          <div className="pt-1 pl-16 text-lg font-bold">Lux: Illuminated</div>
          <div className="pl-16 font-light opacity-60">Demacia</div>
        </div>
      </div>
      <div className="champion-select-button font-aldrich">
        <div className="champion-select-button-content">
          <div className="pt-1 pl-16 text-lg font-bold">Ahri</div>
          <div className="pl-16 font-light opacity-60">Ionia</div>
        </div>
      </div>
      <div className="champion-select-button font-aldrich">
        <div className="champion-select-button-content">
          <div className="pt-1 pl-16 text-lg font-bold">Gwen</div>
          <div className="pl-16 font-light opacity-60">Shadow Isle</div>
        </div>
      </div>
      <div className="champion-select-button font-aldrich">
        <div className="champion-select-button-content">
          <div className="pt-1 pl-16 text-lg font-bold">Miss Fortune</div>
          <div className="pl-16 font-light opacity-60">Bilgewater</div>
        </div>
      </div>
    </div>
  );
};

export default Sidebar;
