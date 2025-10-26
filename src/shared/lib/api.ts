import {
  BaseQueryFn,
  FetchArgs,
  fetchBaseQuery,
  FetchBaseQueryError,
  FetchBaseQueryMeta,
} from "@reduxjs/toolkit/dist/query";
import { QueryReturnValue } from "@reduxjs/toolkit/dist/query/baseQueryTypes";
import { cloneDeep } from "lodash";
import { BASE_URL } from "../model/constants";

const baseQuery = fetchBaseQuery({ baseUrl: BASE_URL });

/**
 * Fetch query to show error notifications and remove null values
 * @async
 * @param args
 * @param api
 * @param extraOptions
 * @returns {Promise<QueryReturnValue<unknown, FetchBaseQueryError, FetchBaseQueryMeta>>}
 */
export const improvedFetchQuery: BaseQueryFn<
  string | FetchArgs,
  unknown,
  FetchBaseQueryError
> = async (
  args,
  api,
  extraOptions
): Promise<
  QueryReturnValue<unknown, FetchBaseQueryError, FetchBaseQueryMeta>
> => {
  function removeLieFromPropArgObject(property: Record<string, any>) {
    const argument = args as FetchArgs;
    return Object.fromEntries(
      Object.entries(property).filter((param) =>
        argument?.params?.isDefinedArgs
          ? param[1] !== undefined && param[1] !== ""
          : param[1]
      )
    );
  }

  const cloneArgs: string | FetchArgs = cloneDeep(args) as FetchArgs;
  if (cloneArgs?.params?.isDefinedArgs) {
    delete cloneArgs.params.isDefinedArgs;
  }

  if (typeof cloneArgs === "object") {
    if (cloneArgs.params) {
      cloneArgs.params = removeLieFromPropArgObject(cloneArgs.params);
    }
    if (cloneArgs.body) {
      cloneArgs.body = removeLieFromPropArgObject(cloneArgs.body);
    }
  }
  const result = await baseQuery(cloneArgs, api, extraOptions);
  if (result.error?.status === 401) {
    // logout // to emitter and import here
  }
  if (result.error) {
    console.log(result.error);
  }
  return result;
};
