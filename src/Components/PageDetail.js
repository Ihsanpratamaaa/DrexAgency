import "../Style/PageDetail.scss";
import gsap from "gsap";
import image1 from "../Assets/PageDetail-Dummy.webp";
function pageDetail() {
  return (
    <div className="Page-Detail-Container">
      <div className="PD-Section-1">
        <h1 className="Title">Lorem ipsum dolor - Lorem ipsum dolor </h1>
      </div>
      <div className="PD-Section-2">
        <img src={image1} alt="image page detail" />
      </div>
      <div className="PD-Section-3">
        <div className="Left-Side">
          <div className="Overview">
            <p>Overview</p>
            <a>
              <span className="btn-VP">View Project</span>
            </a>
          </div>
          <div className="Overview-Content">
            <p></p>
            <span></span>
          </div>
        </div>
        <div className="Right-Side">
          <div>
            <span className="Line"></span>
            <p className="Sub-Title">background</p>
            <span className="content">
              Lorem ipsum dolor sit amet, consectetur adipiscing elit. Suscipit
              ac viverra varius sit viverra sagittis tempus vitae. Enim, mi,
              sollicitudin posuere convallis diam non amet. Sed felis adipiscing
              porttitor mollis tortor amet, gravida lacus. Est porta dictum cras
              tincidunt lorem vestibulum molestie cursus velit. Dolor nam donec
              feugiat rhoncus, vitae lacus, nisi. Neque sed vitae etiam pharetra
              in risus, quam. Pulvinar nisl senectus scelerisque eu tempus,
              nisi, congue. In scelerisque a.
            </span>
          </div>
          <div>
            <span className="Line"></span>
            <p className="Sub-Title">The Challenge</p>
            <span className="content">
              Lorem ipsum dolor sit amet, consectetur adipiscing elit. Suscipit
              ac viverra varius sit viverra sagittis tempus vitae. Enim, mi,
              sollicitudin posuere convallis diam non amet. Sed felis adipiscing
              porttitor mollis tortor amet, gravida lacus. Est porta dictum cras
              tincidunt lorem vestibulum molestie cursus velit. Dolor nam donec
              feugiat rhoncus, vitae lacus, nisi. Neque sed vitae etiam pharetra
              in risus, quam. Pulvinar nisl senectus scelerisque eu tempus,
              nisi, congue. In scelerisque a.
            </span>
          </div>
        </div>
      </div>
    </div>
  );
}

export default pageDetail;
