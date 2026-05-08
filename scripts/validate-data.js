import {
  claims,
  demands,
  downloads,
  news,
  pages,
  quickArguments,
  sourceGroups,
  sourceRegistry,
  strikeSchedule,
  updates
} from "../src/data.js";

const errors = [];

const assert = (condition, message) => {
  if (!condition) errors.push(message);
};

const idsAreUnique = (items, label) => {
  const ids = items.map((item) => item.id);
  assert(new Set(ids).size === ids.length, `${label}: IDs duplicados`);
};

idsAreUnique(pages, "pages");
idsAreUnique(claims, "claims");
idsAreUnique(demands, "demands");
idsAreUnique(news, "news");
idsAreUnique(strikeSchedule, "strikeSchedule");

for (const item of [...claims, ...demands, ...news, ...strikeSchedule]) {
  assert(item.sources?.length > 0, `${item.id}: falta sources`);
  for (const sourceId of item.sources ?? []) {
    assert(sourceRegistry[sourceId], `${item.id}: fuente desconocida ${sourceId}`);
  }
}

for (const group of sourceGroups) {
  assert(group.ids.length > 0, `${group.title}: grupo sin fuentes`);
  for (const sourceId of group.ids) {
    assert(sourceRegistry[sourceId], `${group.title}: fuente desconocida ${sourceId}`);
  }
}

assert(updates.length > 0, "updates: debe haber novedades iniciales");
assert(quickArguments.length >= 4, "quickArguments: faltan argumentos mínimos");
assert(downloads.length > 0, "downloads: faltan descargas");

if (errors.length) {
  console.error(errors.join("\n"));
  process.exit(1);
}

console.log("Datos del portal validados correctamente.");
