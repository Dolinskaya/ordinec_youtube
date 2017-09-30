var Token = () => {
    return {
        token: localStorage.getItem('accessToken')

    }
};

export default new Token;
