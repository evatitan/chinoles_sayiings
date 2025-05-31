import type { Saying } from "./type";
import { FontAwesomeIcon } from "@fortawesome/react-fontawesome";
import { faBook } from "@fortawesome/free-solid-svg-icons";

interface SayingsProps {
  sayings: Saying[];
  handleSayingClick: (text: string) => void;
}

export default function Sayings({ sayings, handleSayingClick }: SayingsProps) {
  return (
    <>
      {sayings.map((saying) => (
        <div key={saying.id}>
          <a
            className="panel-block is-active"
            href="/"
            style={{ textDecoration: "none" }}
            onClick={(e) => {
              e.preventDefault();
              handleSayingClick(saying.id);
            }}
          >
            <span className="panel-icon">
              <FontAwesomeIcon icon={faBook} />
            </span>
            <b>&nbsp;{saying.title}</b>
          </a>
          <div className="sayingMeans">
            {saying.showExample && (
              <p>
                <i>
                  <b>Means: </b>
                </i>
                {saying.means}
                <br />
                <i>
                  <b>Example: </b>
                </i>
                {saying.example}
              </p>
            )}
          </div>
        </div>
      ))}
    </>
  );
}
