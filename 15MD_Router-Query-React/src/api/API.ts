import axios from 'axios';
import { TCharacter } from '../types/Character';
import { TEpisode } from '../types/Episode';

type TCharacterAPI = {
    info:{
     pages:number
    },
    results:TCharacter[]
}

type TEpisodeAPI = {
    info: {
        pages: number
    },
    results: TEpisode[]
}

export const charactersApi = {
    async getAll(id: number) {
        return axios.get<TCharacterAPI>(`https://rickandmortyapi.com/api/character?page=${id}`);
    },
    async getById(id: number) {
        return axios.get<TCharacter>(`https://rickandmortyapi.com/api/character/${id}`);
    },
    async getByUrl(url: string){
        return axios.get<TEpisode>(url);
    }
};

export const episodesApi = {
    async getAll(id: number) {
        return axios.get<TEpisodeAPI>(`https://rickandmortyapi.com/api/episode?page=${id}`);
    },
    async getById(id: number) {
        return axios.get<TEpisode>(`https://rickandmortyapi.com/api/episode/${id}`);
    },
    async getByUrl(url: string){
        return axios.get<TCharacter>(url);
    }
};