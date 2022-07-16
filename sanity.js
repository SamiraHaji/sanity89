import{
    createCurrentUserHook,
    // createImageUrlBuilder
    createClient,
} from "next-sanity";
// j'ai rajouter ça car il avait mi sur la 3 ème ligne mais elle ne fonctionne pas
import createImageUrlBuilder from '@sanity/image-url'; 

export const config = {
    /** 
     * Find your project ID anddataset in 'sanity.json' in your studio project.
     * These are considered"public", but tou can use environnement variables
     * if you want differ between local dev and production. 
     * 
     * https://nextjs.org/docs/basic-features/environnement-variables
     **/

    dataset: process.env.NEXT_PUBLIC_SANITY_DATASET || "production",
    projectId : process.env.NEXT_PUBLIC_SANITY_PROJECT_ID,
    apiVersion : "2021-03-25",
    /**
     * Set useCdn to 'false'if your application require the freshest possible
     * data always (potentially slightly slower and a bit more expensive).
     * Authentificated request (like preview) will always bypass the CDN  
    **/
   useCdn :process.env.NODE_ENV === 'production',
};
//  Set up the client for fetching data in the getPass page functions.
export const sanityClient = createClient(config);
/**
 * Set up a header function for generating Image URLs with only the asset
 reference data in your documents. * 
 * Read more : https://www.sanity.in/docs/image-url
 **/
export const urlFor= (source) => createImageUrlBuilder(config).image(source);

// Header functions for using the current logged in user account.
export const useCurrentUser = createCurrentUserHook(config);

