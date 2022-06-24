interface Endpoints {
login: string;
changePassword: string;
issues: string
}

const endpoints :Endpoints = {
login: "account/users/auth/",
changePassword: "/account/users/reset_password/",
issues: "/messages/assigned/"
}

export default endpoints