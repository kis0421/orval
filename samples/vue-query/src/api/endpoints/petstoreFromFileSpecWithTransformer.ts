/**
 * Generated by orval v6.15.0 🍺
 * Do not edit manually.
 * Swagger Petstore
 * OpenAPI spec version: 1.0.0
 */
import { useQuery, useInfiniteQuery, useMutation } from '@tanstack/vue-query';
import type {
  UseQueryOptions,
  UseInfiniteQueryOptions,
  UseMutationOptions,
  QueryFunction,
  MutationFunction,
  QueryKey,
  UseQueryReturnType,
  UseInfiniteQueryReturnType,
} from '@tanstack/vue-query';
import type {
  Pets,
  Error,
  ListPetsParams,
  Pet,
  CreatePetsBody,
} from '../model';
import { customInstance } from '../mutator/custom-instance';

type AwaitedInput<T> = PromiseLike<T> | T;

type Awaited<O> = O extends AwaitedInput<infer T> ? T : never;

/**
 * @summary List all pets
 */
export const listPets = (
  params?: ListPetsParams,
  version = 1,
  signal?: AbortSignal,
) => {
  return customInstance<Pets>({
    url: `/v${version}/pets`,
    method: 'get',
    params,
    signal,
  });
};

export const getListPetsQueryKey = (params?: ListPetsParams, version = 1) =>
  [`/v${version}/pets`, ...(params ? [params] : [])] as const;

export const getListPetsInfiniteQueryOptions = <
  TData = Awaited<ReturnType<typeof listPets>>,
  TError = Error,
>(
  params?: ListPetsParams,
  version = 1,
  options?: {
    query?: UseInfiniteQueryOptions<
      Awaited<ReturnType<typeof listPets>>,
      TError,
      TData
    >;
  },
): UseInfiniteQueryOptions<
  Awaited<ReturnType<typeof listPets>>,
  TError,
  TData
> & { queryKey: QueryKey } => {
  const { query: queryOptions } = options ?? {};

  const queryKey = getListPetsQueryKey(params, version);

  const queryFn: QueryFunction<Awaited<ReturnType<typeof listPets>>> = ({
    signal,
    pageParam,
  }) => listPets({ limit: pageParam, ...params }, version, signal);

  return { queryKey, queryFn, enabled: !!version, ...queryOptions };
};

export type ListPetsInfiniteQueryResult = NonNullable<
  Awaited<ReturnType<typeof listPets>>
>;
export type ListPetsInfiniteQueryError = Error;

export const useListPetsInfinite = <
  TData = Awaited<ReturnType<typeof listPets>>,
  TError = Error,
>(
  params?: ListPetsParams,
  version = 1,
  options?: {
    query?: UseInfiniteQueryOptions<
      Awaited<ReturnType<typeof listPets>>,
      TError,
      TData
    >;
  },
): UseInfiniteQueryReturnType<TData, TError> & { queryKey: QueryKey } => {
  const queryOptions = getListPetsInfiniteQueryOptions(
    params,
    version,
    options,
  );

  const query = useInfiniteQuery(queryOptions) as UseInfiniteQueryReturnType<
    TData,
    TError
  > & { queryKey: QueryKey };

  query.queryKey = queryOptions.queryKey;

  return query;
};

export const getListPetsQueryOptions = <
  TData = Awaited<ReturnType<typeof listPets>>,
  TError = Error,
>(
  params?: ListPetsParams,
  version = 1,
  options?: {
    query?: UseQueryOptions<
      Awaited<ReturnType<typeof listPets>>,
      TError,
      TData
    >;
  },
): UseQueryOptions<Awaited<ReturnType<typeof listPets>>, TError, TData> & {
  queryKey: QueryKey;
} => {
  const { query: queryOptions } = options ?? {};

  const queryKey = getListPetsQueryKey(params, version);

  const queryFn: QueryFunction<Awaited<ReturnType<typeof listPets>>> = ({
    signal,
  }) => listPets(params, version, signal);

  return { queryKey, queryFn, enabled: !!version, ...queryOptions };
};

export type ListPetsQueryResult = NonNullable<
  Awaited<ReturnType<typeof listPets>>
>;
export type ListPetsQueryError = Error;

export const useListPets = <
  TData = Awaited<ReturnType<typeof listPets>>,
  TError = Error,
>(
  params?: ListPetsParams,
  version = 1,
  options?: {
    query?: UseQueryOptions<
      Awaited<ReturnType<typeof listPets>>,
      TError,
      TData
    >;
  },
): UseQueryReturnType<TData, TError> & { queryKey: QueryKey } => {
  const queryOptions = getListPetsQueryOptions(params, version, options);

  const query = useQuery(queryOptions) as UseQueryReturnType<TData, TError> & {
    queryKey: QueryKey;
  };

  query.queryKey = queryOptions.queryKey;

  return query;
};

/**
 * @summary Create a pet
 */
export const createPets = (createPetsBody: CreatePetsBody, version = 1) => {
  return customInstance<Pet>({
    url: `/v${version}/pets`,
    method: 'post',
    headers: { 'Content-Type': 'application/json' },
    data: createPetsBody,
  });
};

export const getCreatePetsMutationOptions = <
  TError = Error,
  TContext = unknown,
>(options?: {
  mutation?: UseMutationOptions<
    Awaited<ReturnType<typeof createPets>>,
    TError,
    { data: CreatePetsBody; version?: number },
    TContext
  >;
}): UseMutationOptions<
  Awaited<ReturnType<typeof createPets>>,
  TError,
  { data: CreatePetsBody; version?: number },
  TContext
> => {
  const { mutation: mutationOptions } = options ?? {};

  const mutationFn: MutationFunction<
    Awaited<ReturnType<typeof createPets>>,
    { data: CreatePetsBody; version?: number }
  > = (props) => {
    const { data, version } = props ?? {};

    return createPets(data, version);
  };

  return { mutationFn, ...mutationOptions };
};

export type CreatePetsMutationResult = NonNullable<
  Awaited<ReturnType<typeof createPets>>
>;
export type CreatePetsMutationBody = CreatePetsBody;
export type CreatePetsMutationError = Error;

export const useCreatePets = <TError = Error, TContext = unknown>(options?: {
  mutation?: UseMutationOptions<
    Awaited<ReturnType<typeof createPets>>,
    TError,
    { data: CreatePetsBody; version?: number },
    TContext
  >;
}) => {
  const mutationOptions = getCreatePetsMutationOptions(options);

  return useMutation(mutationOptions);
};

/**
 * @summary Info for a specific pet
 */
export const showPetById = (
  petId: string,
  version = 1,
  signal?: AbortSignal,
) => {
  return customInstance<Pet>({
    url: `/v${version}/pets/${petId}`,
    method: 'get',
    signal,
  });
};

export const getShowPetByIdQueryKey = (petId: string, version = 1) =>
  [`/v${version}/pets/${petId}`] as const;

export const getShowPetByIdInfiniteQueryOptions = <
  TData = Awaited<ReturnType<typeof showPetById>>,
  TError = Error,
>(
  petId: string,
  version = 1,
  options?: {
    query?: UseInfiniteQueryOptions<
      Awaited<ReturnType<typeof showPetById>>,
      TError,
      TData
    >;
  },
): UseInfiniteQueryOptions<
  Awaited<ReturnType<typeof showPetById>>,
  TError,
  TData
> & { queryKey: QueryKey } => {
  const { query: queryOptions } = options ?? {};

  const queryKey = getShowPetByIdQueryKey(petId, version);

  const queryFn: QueryFunction<Awaited<ReturnType<typeof showPetById>>> = ({
    signal,
  }) => showPetById(petId, version, signal);

  return { queryKey, queryFn, enabled: !!(version && petId), ...queryOptions };
};

export type ShowPetByIdInfiniteQueryResult = NonNullable<
  Awaited<ReturnType<typeof showPetById>>
>;
export type ShowPetByIdInfiniteQueryError = Error;

export const useShowPetByIdInfinite = <
  TData = Awaited<ReturnType<typeof showPetById>>,
  TError = Error,
>(
  petId: string,
  version = 1,
  options?: {
    query?: UseInfiniteQueryOptions<
      Awaited<ReturnType<typeof showPetById>>,
      TError,
      TData
    >;
  },
): UseInfiniteQueryReturnType<TData, TError> & { queryKey: QueryKey } => {
  const queryOptions = getShowPetByIdInfiniteQueryOptions(
    petId,
    version,
    options,
  );

  const query = useInfiniteQuery(queryOptions) as UseInfiniteQueryReturnType<
    TData,
    TError
  > & { queryKey: QueryKey };

  query.queryKey = queryOptions.queryKey;

  return query;
};

export const getShowPetByIdQueryOptions = <
  TData = Awaited<ReturnType<typeof showPetById>>,
  TError = Error,
>(
  petId: string,
  version = 1,
  options?: {
    query?: UseQueryOptions<
      Awaited<ReturnType<typeof showPetById>>,
      TError,
      TData
    >;
  },
): UseQueryOptions<Awaited<ReturnType<typeof showPetById>>, TError, TData> & {
  queryKey: QueryKey;
} => {
  const { query: queryOptions } = options ?? {};

  const queryKey = getShowPetByIdQueryKey(petId, version);

  const queryFn: QueryFunction<Awaited<ReturnType<typeof showPetById>>> = ({
    signal,
  }) => showPetById(petId, version, signal);

  return { queryKey, queryFn, enabled: !!(version && petId), ...queryOptions };
};

export type ShowPetByIdQueryResult = NonNullable<
  Awaited<ReturnType<typeof showPetById>>
>;
export type ShowPetByIdQueryError = Error;

export const useShowPetById = <
  TData = Awaited<ReturnType<typeof showPetById>>,
  TError = Error,
>(
  petId: string,
  version = 1,
  options?: {
    query?: UseQueryOptions<
      Awaited<ReturnType<typeof showPetById>>,
      TError,
      TData
    >;
  },
): UseQueryReturnType<TData, TError> & { queryKey: QueryKey } => {
  const queryOptions = getShowPetByIdQueryOptions(petId, version, options);

  const query = useQuery(queryOptions) as UseQueryReturnType<TData, TError> & {
    queryKey: QueryKey;
  };

  query.queryKey = queryOptions.queryKey;

  return query;
};
