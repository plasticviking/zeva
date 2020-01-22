/*
 * Container component
 * All data handling & manipulation should be handled here.
 */
import React, { useEffect, useState } from 'react';
import axios from 'axios';

import { useParams } from 'react-router-dom';
import VehicleDetailsPage from './components/VehicleDetailsPage';

const VehicleDetailContainer = (props) => {
  const [vehicle, setVehicle] = useState({});
  const [loading, setLoading] = useState(true);
  const { id } = useParams();

  const { keycloak } = props;

  const stateChange = (newState) => {
    setLoading(true);
    axios.patch(`vehicles/${id}/state_change`, { state: newState }).then(() => {
      axios.get(`vehicles/${id}`).then((response) => {
        setVehicle(response.data);
        setLoading(false);
      });
    });
  };

  const refreshList = () => {
    setLoading(true);

    axios.get(`vehicles/${id}`).then((response) => {
      setVehicle(response.data);
      setLoading(false);
    });
  };

  useEffect(() => {
    refreshList();
  }, [keycloak.authenticated]);

  return (<VehicleDetailsPage loading={loading} details={vehicle} requestStateChange={stateChange} />);
};

VehicleDetailContainer.propTypes = {};

export default VehicleDetailContainer;
