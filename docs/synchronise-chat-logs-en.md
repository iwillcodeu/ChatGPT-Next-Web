# Synchronize Chat Logs with UpStash
## Prerequisites
- GitHub account
- Your own ChatGPT-Next-Web server set up
- [UpStash](https://upstash.com)

## Getting Started
1. Register for an UpStash account.
2. Create a database.

    ![Register and Login](./images/upstash-1.png)

    ![Create Database](./images/upstash-2.png)

    ![Select Server](./images/upstash-3.png)

3. In your UpStash account, navigate to the database you created and locate the REST API endpoint and the respective authentication token (UPSTASH_REDIS_REST_URL and UPSTASH_REDIS_REST_TOKEN). Ensure to keep your authentication token private.

    ![Find REST API](./images/find-rest-api.png)

   ![Copy](./images/upstash-4.png)

4. Copy UPSTASH_REDIS_REST_URL and UPSTASH_REDIS_REST_TOKEN into your synchronization configuration, then click **Check Availability**.

    ![Synchronize 1](./images/upstash-5.png)

    If everything is in order, you've successfully completed this step.

    ![Sync Availability Check Completed](./images/upstash-6.png)

5. After successfully completing this step, you should have copied the UPSTASH_REDIS_REST_URL and UPSTASH_REDIS_REST_TOKEN, allowing you to proceed with the synchronization process.

   ![Great job~!](./images/upstash-7.png)