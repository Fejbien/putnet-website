import requests
import json
from dotenv import load_dotenv
import os

load_dotenv()

api_key = os.getenv("API_KEY")
guild_id = os.getenv("GUILD_ID")

nesseary_data = ['id', 'name', 'description', 'scheduled_start_time', 'scheduled_end_time', 'entity_metadata']
headers = {
    "authorization": f"Bot {api_key}"
}

response = requests.get(f'https://discord.com/api/v10/guilds/{guild_id}/scheduled-events', headers=headers)
data = response.json()

for event in data:
    for key in list(event):
        if key not in nesseary_data:
            del event[key]

with open('./src/data/meetingsData.json', 'w', encoding='utf-8') as f:
    json.dump(data, f, ensure_ascii=False, indent=4)