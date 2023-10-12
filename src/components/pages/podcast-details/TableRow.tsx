import { songUpgradeData } from "@/../public/data/songUpgrdeData";
import SongUpgradeTableRow from "../album-allsong/SongUpgradeTableRow";

const TableRow = () => {
  return (
    <div className="latest__songwrap ">
      <table className="table align-middle align-center w-100">
        <tbody>
          {songUpgradeData.slice(0, 5).map(({ id, ...props }, index) => (
            <SongUpgradeTableRow key={id} {...props} index={index + 1} />
          ))}
        </tbody>
      </table>
    </div>
  );
};

export default TableRow;
