import "../components/ProfileBanner.css";
import ImageBox from "./ImageBox";

const ProfileBanner = () => {
  return (
    <div className="profile-page">
      <div className="banner">
        <div className="profile-info">
          <div className="profile-picture">
            <img
              src="../../assets/pexels-eren-li-7241423.jpg"
              alt="Profile Picture"
            />
            <h4>Cheater lv. 4</h4>
          </div>

          <div className="profile-details">
            <div className="center-banner-details">
              <h3>Willbeckh</h3>
              <div className="link-buttons">
                <button>Follow</button>
                <button>Unfollow</button>
              </div>
            </div>
            <div className="insight-profile">
              <p>Follower: 13147</p>
              <p>Post: 249</p>
            </div>
          </div>

          <ImageBox />
        </div>
      </div>
    </div>
  );
};

export default ProfileBanner;
