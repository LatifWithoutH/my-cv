import dataMahasiswa from "./dataMahasiswa.json";
import "./App.css";

function Profile() {
  const { profile, statistics } = dataMahasiswa;

  return (
    <section className="card profile-card">
      {/* PROFILE SECTION */}
      <div className="profile">
        <img
          src={profile.photo_url}
          alt={profile.full_name}
          className="profile-photo"
          onError={(e) => {
            e.target.src = "https://via.placeholder.com/150";
          }}
        />

        <div className="profile-details">
          <h2>{profile.full_name}</h2>
          <p className="subtitle">{profile.headline}</p>

          {/* Badges */}
          <div className="badge-group">
            <span className="badge">{profile.nim}</span>
            <span className="badge">{profile.prodi}</span>
            <span className="badge">{profile.angkatan}</span>
          </div>

          {/* Location + Views */}
          <div className="profile-meta">
            <span>📍 {profile.location}</span>
            <span>👁 {statistics.views_count} views</span>
          </div>

          <p className="bio">{profile.short_bio}</p>

          {profile.portfolio_url && (
            <a
              href={profile.portfolio_url}
              className="button-link"
              target="_blank"
              rel="noopener noreferrer"
            >
              🔗 Visit Portfolio
            </a>
          )}
        </div>
      </div>
    </section>
  );
}

export default Profile;
