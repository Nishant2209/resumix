import axios from 'axios';

const apiUrl = {
  accounts: 'accounts',
  authenticate: 'accounts/authenticate',
  refreshToken: 'accounts/refresh-token',
  revokeToken: 'accounts/revoke-token',
  register: 'accounts/register',
  verifyEmail: 'accounts/verify-email',
  forgotPassword: 'accounts/forgot-password',
  validateResetToken: 'accounts/validate-reset-token',
  resetPassword: 'accounts/reset-password',
  resendEmail: '/accounts/resend-email',
  authenticateSocial: '/accounts/authenticate-social',
  registerSocial: '/accounts/register-social',

  linkedIn: '/linkedIn',
  createLinkedIn: '/linkedIn/create',
};

const uploadPdfToServer = async (data) => {
  try {
    const res = await axios.post(`/convert-to-word/upload`, data);
    // const res = await axios.post(`http://localhost:4000/convert-to-word`, data);
    // // console.log(res)
    return res;
  } catch (Error) {
    // console.log(Error);
    const err = Error.response.data.message;
    return err;
  }
};

const convertPdfAndDownload = async (data) => {
  try {
    const res = await axios.post(`/convert-to-word/convert`, data);
    // const res = await axios.post(`http://localhost:4000/convert-to-word`, data);
    // // console.log(res)
    return res;
  } catch (Error) {
    // console.log(Error);
    const err = Error.response.data.message;
    return err;
  }
};

const updateDownloadsById = async (id, data) => {
  try {
    const res = await axios.get(`/accounts/downloads/${id}`);
    // const res = await axios.post(`http://localhost:4000/accounts/downloads/${id}`,data);
    // // console.log(res)
    return res;
  } catch (Error) {
    // console.log(Error);
    const err = Error.response.data.message;
    return err;
  }
};
const getDownloadsById = async (id) => {
  try {
    const res = await axios.get(`/accounts/downloads/${id}`);
    // const res = await axios.get(`http://localhost:4000/accounts/downloads/${id}`);
    // // console.log(res)
    return res;
  } catch (Error) {
    // console.log(Error);
    const err = Error.response.data.message;
    return err;
  }
};

const getCustomerInvoicesById = async (id) => {
  try {
    const res = await axios.get(`/customer-invoices/${id}`);
    // const res = await axios.get(`http://localhost:4000/customer-invoices/${id}`);
    // // console.log(res)
    return res;
  } catch (Error) {
    // console.log(Error);
    const err = Error.response.data.message;
    return err;
  }
};

const getProductId = async (id) => {
  try {
    const res = await axios.get(`/product/${id}`);
    // const res = await axios.get(`http://localhost:4000/product/${id}`);
    // // console.log(res)
    return res;
  } catch (Error) {
    // console.log(Error);
    const err = Error.response.data.message;
    return err;
  }
};

const getPriceyId = async (id) => {
  try {
    const res = await axios.get(`/product-price/${id}`);
    // const res = await axios.get(`http://localhost:4000/product-price/${id}`);
    // // console.log(res)
    return res;
  } catch (Error) {
    // // console.log(Error);
    const err = Error.response.data.message;
    return err;
  }
};

const getSubscriptions = async (customerId) => {
  try {
    const res = await axios.get(`/subscriptions/${customerId}`);
    // const res = await axios.get(`http://localhost:4000/subscriptions/${customerId}`);
    // // console.log(res)
    return res;
  } catch (Error) {
    // // console.log(Error);
    const err = Error.response.data.message;
    return err;
  }
};

const create_stripe_customer = async (data) => {
  try {
    const res = await axios.post('/create-customer', data);
    // const res = await axios.post('http://localhost:4000/create-customer', data);
    // // console.log(res)
    return res;
  } catch (Error) {
    // // console.log(Error);
    const err = Error.response.data.message;
    return err;
  }
};

// /**************************************************************************************************************/

const delete_user_linkedIn_Summary = async (id) => {
  try {
    // const res = await axios.delete(apiUrl.linkedIn + `/${id}`);
    const res = await axios.delete(`/linkedInSummaryUser/${id}`);
    // // console.log(res)
    return res;
  } catch (Error) {
    // // console.log(Error);
    const err = Error.response.data.message;
    return err;
  }
};
const update_user_linkedIn_Summary = async (id, data, token) => {
  try {
    // const res = await axios.put(apiUrl.linkedIn + `/${id}`, linkedIn_data);
    const res = await axios.put(`/linkedInSummaryUser/${id}`, data, token);
    // // console.log(res)
    return res;
  } catch (Error) {
    // // console.log(Error);
    const err = Error.response.data.message;
    return err;
  }
};
const create_user_linkedIn_Summary = async (data, token) => {
  try {
    // const res = await axios.post(apiUrl.createLinkedIn, linkedIn_data);
    const res = await axios.post('/linkedInSummaryUser/create', data, token);
    // // console.log(res)
    return res;
  } catch (Error) {
    console.log(Error.response);
    const err = Error.response.data.message;
    return err;
  }
};

const get_user_linkedIn_Summary_by_userId = async (userId) => {
  try {
    // const res = await axios.get(apiUrl.linkedIn + `/${id}`);
    const res = await axios.get(`/linkedInSummaryUser/getByUserId/${userId}`);
    // // console.log(res)
    return res;
  } catch (Error) {
    // // console.log(Error.response.data.message);
    const err = Error.response.data.message;
    return err;
  }
};

const get_user_linkedIn_Summary_by_id = async (id, token) => {
  try {
    // const res = await axios.get(apiUrl.linkedIn + `/${id}`);
    const res = await axios.get(`/linkedInSummaryUser/${id}`, token);
    // // console.log(res)
    return res;
  } catch (Error) {
    // // console.log(Error.response.data.message);
    const err = Error.response.data.message;
    return err;
  }
};

const get_user_linkedIn_Summary = async () => {
  try {
    // const res = await axios.get(apiUrl.linkedIn);
    const res = await axios.get('/linkedInSummaryUser/');
    // // console.log(res)
    return res;
  } catch (Error) {
    // // console.log(Error);
    const err = Error.response.data.message;
    return err;
  }
};

// /**************************************************************************************************************/

const delete_user_linkedIn_Headline = async (id) => {
  try {
    // const res = await axios.delete(apiUrl.linkedIn + `/${id}`);
    const res = await axios.delete(`/linkedInHeadlineUser/${id}`);
    // // console.log(res)
    return res;
  } catch (Error) {
    // // console.log(Error);
    const err = Error.response.data.message;
    return err;
  }
};
const update_user_linkedIn_Headline = async (id, data, token) => {
  try {
    // const res = await axios.put(apiUrl.linkedIn + `/${id}`, linkedIn_data);
    const res = await axios.put(`/linkedInHeadlineUser/${id}`, data, token);
    // // console.log(res)
    return res;
  } catch (Error) {
    // // console.log(Error);
    const err = Error.response.data.message;
    return err;
  }
};
const create_user_linkedIn_Headline = async (data, token) => {
  try {
    // const res = await axios.post(apiUrl.createLinkedIn, linkedIn_data);
    const res = await axios.post('/linkedInHeadlineUser/create', data, token);
    // // console.log(res)
    return res;
  } catch (Error) {
    console.log(Error.response);
    const err = Error.response.data.message;
    return err;
  }
};

const get_user_linkedIn_Headline_by_userId = async (userId) => {
  try {
    // const res = await axios.get(apiUrl.linkedIn + `/${id}`);
    const res = await axios.get(`/linkedInHeadlineUser/getByUserId/${userId}`);
    // // console.log(res)
    return res;
  } catch (Error) {
    // // console.log(Error.response.data.message);
    const err = Error.response.data.message;
    return err;
  }
};

const get_user_linkedIn_Headline_by_id = async (id, token) => {
  try {
    // const res = await axios.get(apiUrl.linkedIn + `/${id}`);
    const res = await axios.get(`/linkedInHeadlineUser/${id}`, token);
    // // console.log(res)
    return res;
  } catch (Error) {
    // // console.log(Error.response.data.message);
    const err = Error.response.data.message;
    return err;
  }
};

const get_user_linkedIn_Headline = async () => {
  try {
    // const res = await axios.get(apiUrl.linkedIn);
    const res = await axios.get('/linkedInHeadlineUser/');
    // // console.log(res)
    return res;
  } catch (Error) {
    // // console.log(Error);
    const err = Error.response.data.message;
    return err;
  }
};

// /**************************************************************************************************************/

const delete_cover_letter = async (id) => {
  try {
    // const res = await axios.delete(apiUrl.linkedIn + `/${id}`);
    const res = await axios.delete(`/coverLetter/${id}`);
    // // console.log(res)
    return res;
  } catch (Error) {
    // // console.log(Error);
    const err = Error.response.data.message;
    return err;
  }
};
const update_cover_letter = async (id, data, token) => {
  try {
    // const res = await axios.put(apiUrl.linkedIn + `/${id}`, linkedIn_data);
    const res = await axios.put(`/coverLetter/${id}`, data, token);
    // // console.log(res)
    return res;
  } catch (Error) {
    // // console.log(Error);
    const err = Error.response.data.message;
    return err;
  }
};
const create_cover_letter = async (data, token) => {
  try {
    // const res = await axios.post(apiUrl.createLinkedIn, linkedIn_data);
    const res = await axios.post('/coverLetter/create', data, token);
    // // console.log(res)
    return res;
  } catch (Error) {
    console.log(Error.response);
    const err = Error.response.data.message;
    return err;
  }
};

const get_cover_letter_by_userId = async (userId) => {
  try {
    // const res = await axios.get(apiUrl.linkedIn + `/${id}`);
    const res = await axios.get(`/coverLetter/getByUserId/${userId}`);
    // // console.log(res)
    return res;
  } catch (Error) {
    // // console.log(Error.response.data.message);
    const err = Error.response.data.message;
    return err;
  }
};

const get_cover_letter_by_id = async (id, token) => {
  try {
    // const res = await axios.get(`/coverLetter/${id}`, token);
    const res = await axios.get(`/coverLetter/${id}`, token);
    // // console.log(res)
    return res;
  } catch (Error) {
    // // console.log(Error.response.data.message);
    const err = Error.response.data.message;
    return err;
  }
};

const get_cover_letters = async () => {
  try {
    // const res = await axios.get(apiUrl.linkedIn);
    const res = await axios.get('/coverLetter/');
    // // console.log(res)
    return res;
  } catch (Error) {
    // // console.log(Error);
    const err = Error.response.data.message;
    return err;
  }
};

// /**************************************************************************************************************/

const delete_resume = async (id) => {
  try {
    // const res = await axios.delete(apiUrl.linkedIn + `/${id}`);
    const res = await axios.delete(`/resume/${id}`);
    // // console.log(res)
    return res;
  } catch (Error) {
    // // console.log(Error);
    const err = Error.response.data.message;
    return err;
  }
};
const update_resume = async (id, data, token) => {
  try {
    // const res = await axios.put(apiUrl.linkedIn + `/${id}`, linkedIn_data);
    const res = await axios.put(`/resume/${id}`, data, token);
    // // console.log(res)
    return res;
  } catch (Error) {
    // // console.log(Error);
    const err = Error.response.data.message;
    return err;
  }
};
const create_resume = async (data, token) => {
  try {
    // const res = await axios.post('/resume/create', data, token);
    const res = await axios.post('/resume/create', data, token);
    // // console.log(res)
    return res;
  } catch (Error) {
    console.log(Error.response);
    const err = Error.response.data.message;
    return err;
  }
};

const get_resume_by_userId = async (userId) => {
  try {
    // const res = await axios.get(apiUrl.linkedIn + `/${id}`);
    const res = await axios.get(`/resume/getByUserId/${userId}`);
    // // console.log(res)
    return res;
  } catch (Error) {
    console.log(Error);
    const err = Error.response.data.message;
    return err;
  }
};

const get_resume_by_id = async (id, token) => {
  try {
    const res = await axios.get(`/resume/${id}`, token);
    // const res = await axios.get(`/resume/${id}`, token);
    // // console.log(res)
    return res;
  } catch (Error) {
    // // console.log(Error.response.data.message);
    const err = Error.response.data.message;
    return err;
  }
};

const get_resumes = async () => {
  try {
    // const res = await axios.get(apiUrl.linkedIn);
    const res = await axios.get('/resume/');
    // // console.log(res)
    return res;
  } catch (Error) {
    // // console.log(Error);
    const err = Error.response.data.message;
    return err;
  }
};

// /**************************************************************************************************************/

const delete_linkedIn_heading = async (id) => {
  try {
    // const res = await axios.delete(apiUrl.linkedIn + `/${id}`);
    const res = await axios.delete(`/linkedInHeading/${id}`);
    // // console.log(res)
    return res;
  } catch (Error) {
    // // console.log(Error);
    const err = Error.response.data.message;
    return err;
  }
};
const update_linkedIn_heading = async (id, data) => {
  try {
    const linkedIn_data = {
      heading_category: data.heading_category,
      heading_data: data.heading_data,
    };
    // const res = await axios.put(apiUrl.linkedIn + `/${id}`, linkedIn_data);
    const res = await axios.put(`/linkedInHeading/${id}`, linkedIn_data);
    // // console.log(res)
    return res;
  } catch (Error) {
    // // console.log(Error);
    const err = Error.response.data.message;
    return err;
  }
};
const create_linkedIn_heading = async (data, token) => {
  try {
    const linkedIn_data = {
      heading_category: data.heading_category,
      heading_data: data.heading_data,
    };
    // const res = await axios.post(apiUrl.createLinkedIn, linkedIn_data);
    const res = await axios.post(
      '/linkedInHeading/create',
      linkedIn_data,
      token
    );
    // // console.log(res)
    return res;
  } catch (Error) {
    // // console.log(Error);
    const err = Error.response.data.message;
    return err;
  }
};

const get_linkedIn_heading_by_id = async (id) => {
  try {
    // const res = await axios.get(apiUrl.linkedIn + `/${id}`);
    const res = await axios.get(`/linkedInHeading/${id}`);
    // // console.log(res)
    return res;
  } catch (Error) {
    // // console.log(Error.response.data.message);
    const err = Error.response.data.message;
    return err;
  }
};

const get_linkedIn_headings = async () => {
  try {
    // const res = await axios.get(apiUrl.linkedIn);
    const res = await axios.get('/linkedInHeading/');
    // // console.log(res)
    return res;
  } catch (Error) {
    // // console.log(Error);
    const err = Error.response.data.message;
    return err;
  }
};

const delete_linkedIn_category = async (id) => {
  try {
    // const res = await axios.delete(apiUrl.linkedIn + `/${id}`);
    const res = await axios.delete(`/linkedInCategory/${id}`);
    // // console.log(res)
    return res;
  } catch (Error) {
    // // console.log(Error);
    const err = Error.response.data.message;
    return err;
  }
};
const update_linkedIn_category = async (id, data) => {
  try {
    const linkedIn_data = {
      category: data.category,
    };
    // const res = await axios.put(apiUrl.linkedIn + `/${id}`, linkedIn_data);
    const res = await axios.put(`/linkedInCategory/${id}`, linkedIn_data);
    // // console.log(res)
    return res;
  } catch (Error) {
    // // console.log(Error);
    const err = Error.response.data.message;
    return err;
  }
};
const create_linkedIn_category = async (data, token) => {
  try {
    const linkedIn_data = {
      category: data.category,
    };
    // const res = await axios.post(apiUrl.createLinkedIn, linkedIn_data);
    const res = await axios.post(
      '/linkedInCategory/create',
      linkedIn_data,
      token
    );
    // // console.log(res)
    return res;
  } catch (Error) {
    // // console.log(Error);
    const err = Error.response.data.message;
    return err;
  }
};

const get_linkedIn_category_by_id = async (id) => {
  try {
    // const res = await axios.get(apiUrl.linkedIn + `/${id}`);
    const res = await axios.get(`/linkedInCategory/${id}`);
    // // console.log(res)
    return res;
  } catch (Error) {
    // // console.log(Error.response.data.message);
    const err = Error.response.data.message;
    return err;
  }
};

const get_linkedIn_categories = async () => {
  try {
    // const res = await axios.get(apiUrl.linkedIn);
    const res = await axios.get('/linkedInCategory/');
    // // console.log(res)
    return res;
  } catch (Error) {
    // // console.log(Error);
    const err = Error.response.data.message;
    return err;
  }
};

const delete_linkedIn = async (id) => {
  try {
    const res = await axios.delete(apiUrl.linkedIn + `/${id}`);
    // // console.log(res)
    return res;
  } catch (Error) {
    // // console.log(Error);
    const err = Error.response.data.message;
    return err;
  }
};
const update_linkedIn = async (id, data) => {
  try {
    const linkedIn_data = {
      template_name: data.template_name,
      template_profile_data: data.template_profile_data,
    };
    const res = await axios.put(apiUrl.linkedIn + `/${id}`, linkedIn_data);
    // // console.log(res)
    return res;
  } catch (Error) {
    // // console.log(Error);
    const err = Error.response.data.message;
    return err;
  }
};
const create_linkedIn = async (data) => {
  try {
    const linkedIn_data = {
      template_name: data.template_name,
      template_profile_data: data.template_profile_data,
    };
    const res = await axios.post(apiUrl.createLinkedIn, linkedIn_data);
    // // console.log(res)
    return res;
  } catch (Error) {
    // // console.log(Error);
    const err = Error.response.data.message;
    return err;
  }
};

const get_linkedIn_by_id = async (id) => {
  try {
    const res = await axios.get(apiUrl.linkedIn + `/${id}`);
    // const res = await axios.get(`/linkedIn/${id}`);
    // // console.log(res)
    return res;
  } catch (Error) {
    // // console.log(Error.response.data.message);
    const err = Error.response.data.message;
    return err;
  }
};

const get_linkedIn = async () => {
  try {
    const res = await axios.get(apiUrl.linkedIn);
    // const res = await axios.get('/linkedIn/');
    // // console.log(res)
    return res;
  } catch (Error) {
    // // console.log(Error);
    const err = Error.response.data.message;
    return err;
  }
};

const get_account_by_id = async (id, token) => {
  try {
    // const res = await axios.get(`/accounts/${id}`, token);
    const res = await axios.get(apiUrl.accounts + `/${id}`, token);
    // // console.log(res)
    return res;
  } catch (Error) {
    console.log(Error);
    const err = Error.response.data.message;
    return err;
  }
};

const update_account_by_id = async (id, data, token) => {
  try {
    // const res = await axios.put(`/accounts/${id}`,token,data);
    const res = await axios.put(apiUrl.accounts + `/${id}`, token, data);
    // // console.log(res)
    return res;
  } catch (Error) {
    // // console.log(Error);
    const err = Error.response.data.message;
    return err;
  }
};

const resend_email = async (email) => {
  try {
    const data = {
      email: email,
    };
    const res = await axios.post(apiUrl.resendEmail, data);
    // // console.log(res)
    return res;
  } catch (Error) {
    // console.error(Error.response.data.message)
    const err = Error.response.data.message;
    return err;
  }
};

const reset_password = async (data) => {
  try {
    const resetData = {
      token: data.token,
      password: data.password,
      confirmPassword: data.confirmPassword,
    };
    const res = await axios.post(apiUrl.resetPassword, resetData);
    // // console.log(res)
    return res;
  } catch (Error) {
    // console.error(Error.response.data.message)
    const err = Error.response.data.message;
    return err;
  }
};

const verify_email = async (token) => {
  try {
    const verifyEmailToken = {
      token: token,
    };

    const res = await axios.post(apiUrl.verifyEmail, verifyEmailToken);
    // // console.log(res)
    return res;
  } catch (Error) {
    // console.error(Error.response.data.message)
    const err = Error.response.data.message;
    return err;
  }
};

const forgot_password = async (email) => {
  try {
    const emailData = {
      email: email,
    };

    const res = await axios.post(apiUrl.forgotPassword, emailData);
    // // console.log(res)
    return res;
  } catch (Error) {
    // console.error(Error.response.data.message)
    const err = Error.response.data.message;
    return err;
  }
};

const register_social = async (data) => {
  try {
    const regData = {
      title: data.title,
      firstName: data.firstName,
      lastName: data.lastName,
      email: data.email,
      'facebook.id': data.facebook.id,
      'facebook.email': data.facebook.email,
      'facebook.token': data.facebook.token,
      'facebook.image': data.facebook.image,
      'google.id': data.google.id,
      'google.email': data.google.email,
      'google.token': data.google.token,
      'google.image': data.google.image,
      acceptTerms: data.acceptTerms,
      stripeId: data.stripeId,
    };

    const res = await axios.post(apiUrl.registerSocial, regData);
    // const res = await axios.post('//accounts/register-social',regData);
    // console.log(res);
    return res;
  } catch (Error) {
    // // console.log(Error.response.data.message)
    const err = Error.response.data.message;
    return err;
  }
};

const authenticate_social = async (data) => {
  try {
    const socialLoginData = {
      email: data.email,
      type: data.type,
      token: data.token,
    };
    // console.log(socialLoginData);

    const res = await axios.post(apiUrl.authenticateSocial, socialLoginData);
    // console.log(res);
    return res;
  } catch (Error) {
    // console.log(data);
    // // console.log(Error.response.data.message)
    // console.error(Error.response.data.message)
    const err = Error.response.data.message;
    return err;
  }
};

const register = async (data) => {
  try {
    const regData = {
      title: data.title,
      firstName: data.firstName,
      lastName: data.lastName,
      email: data.email,
      password: data.password,
      confirmPassword: data.confirmPassword,
      acceptTerms: data.acceptTerms,
    };

    const res = await axios.post(apiUrl.register, regData);
    // const res = await axios.post('/accounts/register',regData);
    // console.log(res);
    return res;
  } catch (Error) {
    // // console.log(Error.response.data.message)
    const err = Error.response.data.message;
    return err;
  }
};

const authenticate = async (data) => {
  try {
    const loginData = {
      email: data.email,
      password: data.password,
    };

    const res = await axios.post(apiUrl.authenticate, loginData);
    // const res = await axios.post('/accounts/authenticate',loginData);
    // // console.log(res)
    return res;
  } catch (Error) {
    // // console.log(Error.response.data.message)
    // console.error(Error.response.data.message)
    const err = Error.response.data.message;
    return err;
  }
};

const getAllAccounts = async (token) => {
  try {
    const res = await axios.get(apiUrl.accounts, token);
    // // console.log(res)
    return res;
  } catch (Error) {
    const err = Error.response.data.message;
    return err;
  }
};

export {
  delete_user_linkedIn_Summary,
  update_user_linkedIn_Summary,
  create_user_linkedIn_Summary,
  get_user_linkedIn_Summary_by_userId,
  get_user_linkedIn_Summary_by_id,
  get_user_linkedIn_Summary,
  delete_user_linkedIn_Headline,
  update_user_linkedIn_Headline,
  create_user_linkedIn_Headline,
  get_user_linkedIn_Headline_by_userId,
  get_user_linkedIn_Headline_by_id,
  get_user_linkedIn_Headline,
  delete_cover_letter,
  update_cover_letter,
  create_cover_letter,
  get_cover_letter_by_userId,
  get_cover_letter_by_id,
  get_cover_letters,
  delete_resume,
  update_resume,
  create_resume,
  get_resume_by_userId,
  get_resume_by_id,
  get_resumes,
  update_account_by_id,
  delete_linkedIn_heading,
  update_linkedIn_heading,
  create_linkedIn_heading,
  get_linkedIn_heading_by_id,
  get_linkedIn_headings,
  delete_linkedIn_category,
  update_linkedIn_category,
  create_linkedIn_category,
  get_linkedIn_category_by_id,
  get_linkedIn_categories,
  delete_linkedIn,
  update_linkedIn,
  create_linkedIn,
  get_linkedIn_by_id,
  get_linkedIn,
  register,
  authenticate,
  verify_email,
  forgot_password,
  reset_password,
  get_account_by_id,
  resend_email,
  register_social,
  authenticate_social,
  getAllAccounts,
  create_stripe_customer,
  getSubscriptions,
  getPriceyId,
  getProductId,
  getCustomerInvoicesById,
  updateDownloadsById,
  getDownloadsById,
  uploadPdfToServer,
  convertPdfAndDownload,
};
