export type GeoJsonFeatureCollection = {
  type: "FeatureCollection";
  name: string;
  features: GeoJsonFeature[];
};

export type GeoJsonFeature = {
  type: "Feature";
  properties: {
    id: string;
    Name: string;
    description: string;
    timestamp: string | null;
    begin: string | null;
    end: string | null;
    altitudeMode: string;
    tessellate: number;
    extrude: number;
    visibility: number;
    drawOrder: number | null;
    icon: string | null;
    snippet: string;
    vertex_index: number;
    vertex_part: number;
    vertex_part_ring: number;
    vertex_part_index: number;
    distance: number;
    angle: number;
  };
  geometry: {
    type: "Point";
    coordinates: [number, number, number];
  };
};
