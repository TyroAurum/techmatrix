import fsPromises from 'fs/promises';
import path from 'path'

export async function getLocalData() {
  // Get the path of the json file
  const filePath = path.join(process.cwd(), 'app/eventList.json');
  // Read the json file
  const jsonData = await fsPromises.readFile(filePath);
  // Parse data as json
  const objectData = JSON.parse(jsonData);

  return objectData
}


export async function GET(request, {params}){
    const events = params.event;
    const json = await getLocalData();
    const value = json.events[events];

    return Response.json({"event":value});
}