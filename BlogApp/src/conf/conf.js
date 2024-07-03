const conf = {
    appwriteUrl : String(process.env.
        REACT_APP_APPWRITE_URL
    ),
    appwriteProjectId: String(process.env.
        REACT_APP_APPWRITE_PROJECT_ID
    ),
    appwriteDatabaseId: String(process.env.
        REACT_APP_APPWRITE_DATABASE_ID
    ),
    appwriteCollectionId: String(process.env.
        REACT_APP_APPWRITE_COLLECTION_ID
    ),
    appwriteBucketId: String(process.env.
        REACT_APP_APPWRITE_BUCKET_ID
    )
}

export default conf

// We do this because sometimes accessing the environment varibale may throw up an error
// or sometimes there is no guarantee what data type is getting returned. This is a 
// common practise being used.