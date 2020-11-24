/*
 * Generated by orval v3.2.1 🍺
 * Do not edit manually.
 * Swagger Petstore
 * OpenAPI spec version: 1.0.0
 */
import { AxiosPromise, AxiosInstance } from 'axios';
import faker from 'faker';
import {
  SwaggerPetstore,
} from './petstoreFromFileSpecWithTransformer.definition';
import {
  CreatePetsBody,
  ListPetsParams,
  Pet,
  Pets,
} from '../model';

export const getSwaggerPetstoreMock = (): SwaggerPetstore => ({
  listPets(params?: ListPetsParams,
    version?: number,): AxiosPromise<Pets> {
    return Promise.resolve([...Array(faker.random.number({min: 1, max: 10}))].map(() => ({id: faker.random.number(), name: (() => faker.name.lastName())(), tag: (() => faker.name.lastName())()}))).then(data => ({data})) as AxiosPromise<Pets>
  },
  createPets(createPetsBody: CreatePetsBody,
    version?: number,): AxiosPromise<unknown> {
    return Promise.resolve(undefined).then(data => ({data})) as AxiosPromise<unknown>
  },
  showPetById(petId: string,
    version?: number,): AxiosPromise<Pet> {
    return Promise.resolve((() => ({
                id: faker.random.number({ min: 1, max: 99 }),
                name: faker.name.firstName(),
                tag: faker.helpers.randomize([faker.random.word(), undefined]),
              }))()).then(data => ({data})) as AxiosPromise<Pet>
  },
})
