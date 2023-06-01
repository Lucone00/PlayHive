import "../components/ProfileBanner.css";
import ImageBox from "./ImageBox";

const ProfileBanner = () => {
  return (
    <div className="profile-page">
      <div className="banner">
        <div className="profile-data">
          <div className="profile-picture">
            <div className="pic-profile">
              <img
                src="../../assets/pexels-eren-li-7241423.jpg"
                alt="Profile Picture"
              />
              <div class="overlay-pic">
                <button class="change-button">Cambia foto</button>
              </div>
            </div>
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

        <div className="description-profile">
          <h4>Cheater lv. 4</h4>
          <p>
            Lorem ipsum dolor, sit amet consectetur adipisicing elit. Velit
            doloribus, explicabo excepturi, hic sequi ad soluta ducimus ipsam
            suscipit. Ratione excepturi facilis nihil? Natus, incidunt dolorem?
          </p>
        </div>
        
      </div>
    </div>
  );
};

export default ProfileBanner;
