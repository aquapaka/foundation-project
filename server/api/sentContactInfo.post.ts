const TELEGRAM_BOT_API_TOKEN = "5781747643:AAE4gIIti_pOyGhqKH6Zv04xRhwBkdGGQEU";
const CHAT_ID = "6127293402";

export default defineEventHandler(async (event) => {
    const body = await readBody(event);

    const name = body.name;
    const phone = body.phone;
    const branch = body.branch;
    const grade = body.grade;

    const url = `https://api.telegram.org/bot${TELEGRAM_BOT_API_TOKEN}/sendMessage`
    await $fetch(url, {
        method: "post",
        query: {
            chat_id: CHAT_ID,
            text: `<strong>New contact info received</strong>
<strong>Name: </strong>${name}
<strong>Phone number: </strong>${phone}
<strong>Branch: </strong>${branch}
<strong>Grade: </strong>${grade}`,
            parse_mode: "HTML"
        }
    }).then(() => {
        console.log("Send contact info success!");
    }).catch((error) => {
        console.log("Send contact info failed!");
        console.log(error);
        throw createError({
            statusCode: 400,
            statusMessage: 'Send contact info failed!',
        })
    })

    return { status: 200 };
});