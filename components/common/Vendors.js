import Vendor from "./Vendor";

const Vendors = props => {
  const vendors = props.vendors;
  let output = "";

  if (vendors.length) {
    output = (
      <div className="vendor-container">
        <span className="vendor-label">Buy/Stream</span>{" "}
        <ul>
          {vendors.map(vendor => (
            <li key={`vendor-${vendor.id}`}>
              <Vendor {...vendor} />
            </li>
          ))}
        </ul>
      </div>
    );
  }

  return output;
};

export default Vendors;
