import FORMS from '../data/constants/forms';

const setPayload = {
  [FORMS.SIGN_UP_CLUB]: (data: { [key: string | number]: any }) => ({
    ...data,
    sport: 'soccer',
    message: data.message || '',
  }),
  [FORMS.SIGN_UP_REFEREE]: (data: { [key: string | number]: any }) => {
    // clearing input data from unnecessary fields
    const newData = { ...data };
    delete newData.role;
    delete newData.message;
    delete newData.organizationName;
    return {
      ...newData,
      entityType: 1,
      city: 'city',
      name: 'name',
      country: 'country',
      state: 'state',
      zipCode: 'zip',
      street: 'street',
    };
  },
  [FORMS.EDIT_GAME]: (data: { [key: string | number]: any }) => ({
    ...data,
    isTournament: data.isTournament || false,
    organizationId: data.organizationId || 'organizationId',
    location: data.location || {
      latitude: 0,
      longitude: 0,
    },
  }),
};

export default setPayload;
