import axios from 'axios';

export const charactersAPI = {
    async getAll(id: number) {
        return axios.get(`https://rickandmortyapi.com/api/character?page=${id}`);
    },
    async getById(id: number) {
        return axios.get(`https://rickandmortyapi.com/api/character/${id}`);
    }
};

export const episodesApi = {
    async getAll(id: number) {
        return axios.get(`https://rickandmortyapi.com/api/episode?page=${id}`);
    },
    async getById(id: number) {
        return axios.get(`https://rickandmortyapi.com/api/episode/${id}`);
    }
};

export const episodeDetails ={
    async getByUrl(url: string){
        return axios.get(url);
    }
};