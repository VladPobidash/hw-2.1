import React, { useEffect, useState } from "react";
import API from "../../../api";

import Loading from "../../common/loading";
import Qualities from "../../ui/qualities";
import PropTypes from "prop-types";
import { useHistory } from "react-router";

const UserPage = ({ id }) => {
  const history = useHistory();
  const [user, setUser] = useState();

  // eslint-disable-next-line space-before-function-paren
  useEffect(() => {
    API.users.getById(id).then(setUser);
  }, []);

  if (!user) return <Loading />;

  const { name, qualities, profession, completedMeetings, rate } = user;

  return (
    <div className="card" style={{ width: "50%", margin: "0 auto" }}>
      <div className="card-body">
        <h2 className="card-title">{name}</h2>
        <p>
          <Qualities qualities={qualities} />
        </p>
        <p>{profession.name}</p>
        <p>{completedMeetings}</p>
        <p>{rate}</p>
        <button
          className="btn btn-primary"
          onClick={() => history.push(`/users/${id}/edit`)}
        >
          Изменить
        </button>
      </div>
    </div>
  );
};
UserPage.propTypes = {
  id: PropTypes.string.isRequired
};
export default UserPage;
