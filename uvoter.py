import requests

forum_session = "<session_cookie>"
post_min = 7490000
post_max = 7491769
user_agent = "SammyVoter 1.0"

for i in range(post_min, post_max):
    print(i)
    cookies = {"_forum_session": forum_session}
    r = requests.get("https://www.mikrocontroller.net/topic/vote_post?id=%d&rating=1" % (i,), headers={"User-Agent": user_agent}, cookies=cookies)
