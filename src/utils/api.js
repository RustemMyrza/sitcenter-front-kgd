const host = process.env.VUE_APP_SERVER_HOST;
const port = process.env.VUE_APP_SERVER_PORT;

export const API_BASE_URL = `http://${host}:${port}/api/v1`;

export const BOARD_API_URL = `${API_BASE_URL}/board`;
export const TICKET_API_URL = `${API_BASE_URL}/tickets`;
// export const BOARD_API_URL = `${API_BASE_URL}/board`;
// export const BOARD_API_URL = `${API_BASE_URL}/board`;
// export const BOARD_API_URL = `${API_BASE_URL}/board`;