import { useInventory } from "src/stores/useInventory";
import { Archetype, Item } from "src/scripts/objects"

const uri = "http://localhost:8000"

// all functions here should return false upon failure
// 'get' functions return data upon success and others should return true

const inventorySt = useInventory()

// Get list of items
export async function get_items() {
    let response = false;
    await fetch(uri + "/items", {
        method: "GET",
        headers: {
            'Authorization': "Bearer " + localStorage["accessToken"],
            'Accept': 'application/json'
        }
    }).then(r => response = r).catch(e => { console.log(e); return false; });
    let data = response.json();
    console.log(response);
    let items = data.map((x) => new Item(inventorySt.getArchetypeById(x.archetype, x.archetype_data, x.id)));
    return items;
}

// Add new item 
export async function add_item(newItem) {
    let item = {
        note: "",
        archetype: newItem.archetype.dbId,
        archetype_data: newItem.archetypeData
    }
    await fetch(uri + "/items", {
        method: "POST",
        headers: {
            'Authorization': "Bearer " + localStorage["accessToken"],
            'Accept': 'application/json'
        },
        json: item
    }).then(r => response = r).catch(e => { console.log(e); return false; });
    let data = response.json();
    console.log(response);
    newItem.dbId = data.id;
    return true;
}

export async function modify_item(modItem) {
    let item = {
        note: "",
        archetype: newItem.archetype.dbId,
        archetype_data: newItem.archetypeData
    }
    await fetch(uri + "/items/" + modItem.dbId, {
        method: "PUT",
        headers: {
            'Authorization': "Bearer " + localStorage["accessToken"],
            'Accept': 'application/json'
        },
        json: item
    }).then(r => response = r).catch(e => { console.log(e); return false; });
    console.log(response);
    return true;
}

// Delete item
export async function delete_item(id) {
    await fetch(uri + `/items/${id}`, {
        method: "DELETE",
        headers: {
            'Authorization': "Bearer " + localStorage["accessToken"],
            'Accept': 'application/json'
        }
    }).then(r => response = r).catch(e => { console.log(e); return false; });
    //let data = response.json();
    console.log(response);
    return true;
}

// Get list of archetypes
export async function get_archetypes() {
    let response = false;
    await fetch(uri + "/archetypes", {
        method: "GET",
        headers: {
            'Authorization': "Bearer " + localStorage["accessToken"],
            'Accept': 'application/json'
        }
    }).then(r => response = r).catch(e => { console.log(e); return false; });
    let data = response.json();
    console.log(response);
    let arches = data.map((x) => new Archetype(x.name, x.subject_area, x.schema.fieldTypes, x.schema.fieldNames, x.schema.fieldDefault, dbId = x.id));
    return arches;
}

// Create Archetype
export async function add_archetype(archetype) {
    let item = {
        name: archetype.name,
        subject_area: archetype.subject,
        schema: { fieldNames: archetype.fieldNames, fieldTypes: archetype.fieldTypes, fieldDefault: archetype.fieldDefault }
    }
    await fetch(uri + "/archetypes", {
        method: "POST",
        headers: {
            'Authorization': "Bearer " + localStorage["accessToken"],
            'Accept': 'application/json'
        },
        json: item
    }).then(r => response = r).catch(e => { console.log(e); return false; });
    let data = response.json();
    archetype.dbId = data.id;
    console.log(response);
    return true;
}

// Delete archetype
export async function delete_archetype(id) {
    await fetch(uri + `/archetype/${id}`, {
        method: "DELETE",
        headers: {
            'Authorization': "Bearer " + localStorage["accessToken"],
            'Accept': 'application/json'
        }
    }).then(r => response = r).catch(e => { console.log(e); return false; });
    //let data = response.json();
    console.log(response);
    return true;
}

// Modify Archetype
export async function add_archetype(archetype) {
    let item = {
        name: archetype.name,
        subject_area: archetype.subject,
        schema: { fieldNames: archetype.fieldNames, fieldTypes: archetype.fieldTypes, fieldDefault: archetype.fieldDefault }
    }
    await fetch(uri + "/archetypes/" + archetype.dbId, {
        method: "PUT",
        headers: {
            'Authorization': "Bearer " + localStorage["accessToken"],
            'Accept': 'application/json'
        },
        json: item
    }).then(r => response = r).catch(e => { console.log(e); return false; });
    let data = response.json();
    archetype.dbId = data.id;
    console.log(response);
    return true;
}

// Get list of subject areas
export async function get_subjects() {
    let response = false;
    await fetch(uri + "/subject_areas", {
        method: "GET",
        headers: {
            'Authorization': "Bearer " + localStorage["accessToken"],
            'Accept': 'application/json'
        }
    }).then(r => response = r).catch(e => { console.log(e); return false; });
    //let data = response.json();
    console.log(response);
    return response.json();
}

// Create subject area
export async function add_subject(name, subject_area, schema) {
    let item = {
        name: name,
        subject_area: subject_area,
        schema: schema
    }
    await fetch(uri + "/subject_area", {
        method: "POST",
        headers: {
            'Authorization': "Bearer " + localStorage["accessToken"],
            'Accept': 'application/json'
        },
        json: item
    }).then(r => response = r).catch(e => { console.log(e); return false; });
    //let data = response.json();
    console.log(response);
    return true;
}

// Delete subject area
export async function delete_subject(id) {
    await fetch(uri + `/subject_area/${id}`, {
        method: "DELETE",
        headers: {
            'Authorization': "Bearer " + localStorage["accessToken"],
            'Accept': 'application/json'
        }
    }).then(r => response = r).catch(e => { console.log(e); return false; });
    //let data = response.json();
    console.log(response);
    return true;
}

// Get list of users
export async function get_users() {
    let response = false;
    await fetch(uri + "/users", {
        method: "GET",
        headers: {
            'Authorization': "Bearer " + localStorage["accessToken"],
            'Accept': 'application/json'
        }
    }).then(r => response = r).catch(e => { console.log(e); return false; });
    //let data = response.json();
    console.log(response);
    return response.json();
}

// Get list of roles
export async function get_roles() {
    let response = false;
    await fetch(uri + "/subject_areas", {
        method: "GET",
        headers: {
            'Authorization': "Bearer " + localStorage["accessToken"],
            'Accept': 'application/json'
        }
    }).then(r => response = r).catch(e => { console.log(e); return false; });
    //let data = response.json();
    console.log(response);
    return response.json();
}