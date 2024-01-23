import "./profile.scss";
import SyncIcon from "../../assets/sync.svg";
import EditIcon from "../../assets/Edit.svg";
const BusinessProfile = () => {
  const date = new Date();
  const wabaId = 123456;
  return (
    <div id="business-profile">
      <div className="col1">
        <div id="edit-profile">
          <div id="img"></div>
          <div id="data">
            <div id="name-data">
              <div id="name-num">
                <h2>Admission Anytime</h2>
                <p>+912345678900</p>
              </div>
              <img src={EditIcon} alt="edit-icon" id="icon" />
            </div>
            <div id="last-seen-box">
              {`Last synced at ${date.toLocaleString()}`}
              <img src={SyncIcon} alt="icon" />
            </div>
            <div id="waba-option">
              <div id="waba-id">
                <p>WABA ID</p>
                {wabaId}
              </div>
              <div id="waba-id">
                <p>Created On</p>
                {date.toLocaleDateString()}
              </div>
            </div>
          </div>
        </div>
      </div>
      <div className="col1"></div>
      <div className="col1"></div>
    </div>
  );
};

export default BusinessProfile;
