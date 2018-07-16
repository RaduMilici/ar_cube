const data = `<?xml version="1.0" encoding="UTF-8"?>
<COLLADA xmlns="http://www.collada.org/2005/11/COLLADASchema" version="1.4.1">
 <asset>
  <contributor>
   <authoring_tool>SceneKit Collada Exporter v1.0</authoring_tool>
  </contributor>
  <created>2018-06-29T08:37:01Z</created>
  <modified>2018-06-29T08:37:01Z</modified>
  <unit meter="1.000000"/>
  <up_axis>Z_UP</up_axis>
 </asset>
 <library_materials>
  <material id="_1_-_Default-material" name="_1_-_Default">
   <instance_effect url="#effect__1_-_Default-material"/>
  </material>
  <material id="Material__36-material" name="Material_1">
   <instance_effect url="#effect_Material__36-material"/>
  </material>
  <material id="Material__40-material" name="Material_2">
   <instance_effect url="#effect_Material__40-material"/>
  </material>
  <material id="Material__41-material" name="Material_3">
   <instance_effect url="#effect_Material__41-material"/>
  </material>
  <material id="Material__42-material" name="Material_4">
   <instance_effect url="#effect_Material__42-material"/>
  </material>
 </library_materials>
 <library_effects>
  <effect id="effect__1_-_Default-material">
   <profile_COMMON>
    <technique sid="common">
     <lambert>
      <ambient>
       <color>0 0 0 1</color>
      </ambient>
      <diffuse>
       <color>0.0345098 0.0972549 0.470588 1</color>
      </diffuse>
      <transparency>
       <float>1</float>
      </transparency>
      <index_of_refraction>
       <float>1</float>
      </index_of_refraction>
     </lambert>
    </technique>
   </profile_COMMON>
   <extra>
    <technique profile="SceneKit">
     <litPerPixel>1</litPerPixel>
     <ambient_diffuse_lock>1</ambient_diffuse_lock>
    </technique>
   </extra>
  </effect>
  <effect id="effect_Material__36-material">
   <profile_COMMON>
    <technique sid="common">
     <lambert>
      <ambient>
       <color>0 0 0 1</color>
      </ambient>
      <diffuse>
       <color>0.8 0.8 0.8 1</color>
      </diffuse>
      <transparency>
       <float>1</float>
      </transparency>
      <index_of_refraction>
       <float>1</float>
      </index_of_refraction>
     </lambert>
    </technique>
   </profile_COMMON>
   <extra>
    <technique profile="SceneKit">
     <litPerPixel>1</litPerPixel>
     <ambient_diffuse_lock>1</ambient_diffuse_lock>
    </technique>
   </extra>
  </effect>
  <effect id="effect_Material__40-material">
   <profile_COMMON>
    <technique sid="common">
     <lambert>
      <ambient>
       <color>0 0 0 1</color>
      </ambient>
      <diffuse>
       <color>0.8 0.8 0.8 1</color>
      </diffuse>
      <transparency>
       <float>1</float>
      </transparency>
      <index_of_refraction>
       <float>1</float>
      </index_of_refraction>
     </lambert>
    </technique>
   </profile_COMMON>
   <extra>
    <technique profile="SceneKit">
     <litPerPixel>1</litPerPixel>
     <ambient_diffuse_lock>1</ambient_diffuse_lock>
    </technique>
   </extra>
  </effect>
  <effect id="effect_Material__41-material">
   <profile_COMMON>
    <technique sid="common">
     <lambert>
      <ambient>
       <color>0 0 0 1</color>
      </ambient>
      <diffuse>
       <color>0.8 0.8 0.8 1</color>
      </diffuse>
      <transparency>
       <float>1</float>
      </transparency>
      <index_of_refraction>
       <float>1</float>
      </index_of_refraction>
     </lambert>
    </technique>
   </profile_COMMON>
   <extra>
    <technique profile="SceneKit">
     <litPerPixel>1</litPerPixel>
     <ambient_diffuse_lock>1</ambient_diffuse_lock>
    </technique>
   </extra>
  </effect>
  <effect id="effect_Material__42-material">
   <profile_COMMON>
    <technique sid="common">
     <lambert>
      <ambient>
       <color>0 0 0 1</color>
      </ambient>
      <diffuse>
       <color>0.8 0.8 0.8 1</color>
      </diffuse>
      <transparency>
       <float>1</float>
      </transparency>
      <index_of_refraction>
       <float>1</float>
      </index_of_refraction>
     </lambert>
    </technique>
   </profile_COMMON>
   <extra>
    <technique profile="SceneKit">
     <litPerPixel>1</litPerPixel>
     <ambient_diffuse_lock>1</ambient_diffuse_lock>
    </technique>
   </extra>
  </effect>
 </library_effects>
 <library_geometries>
  <geometry id="geometry1">
   <mesh>
    <source id="Untitled-mesh-positions">
     <float_array id="ID2-array" count="630">14.867 14.867 30 -14.867 14.867 30 -14.867 -14.867 30 14.867 14.867 30 -14.867 -14.867 30 14.867 -14.867 30 -15 -15 0 -15 15 0 -14.867 14.867 0 -15 -15 0 -14.867 14.867 0 -14.867 -14.867 0 -15 15 0 15 15 0 14.867 14.867 0 -15 15 0 14.867 14.867 0 -14.867 14.867 0 15 15 0 15 -15 0 14.867 -14.867 0 15 15 0 14.867 -14.867 0 14.867 14.867 0 15 -15 0 -15 -15 0 -14.867 -14.867 0 15 -15 0 -14.867 -14.867 0 14.867 -14.867 0 -15 -15 30 15 -15 30 14.867 -14.867 30 -15 -15 30 14.867 -14.867 30 -14.867 -14.867 30 15 -15 30 15 15 30 14.867 14.867 30 15 -15 30 14.867 14.867 30 14.867 -14.867 30 15 15 30 -15 15 30 -14.867 14.867 30 15 15 30 -14.867 14.867 30 14.867 14.867 30 -15 15 30 -15 -15 30 -14.867 -14.867 30 -15 15 30 -14.867 -14.867 30 -14.867 14.867 30 -15 -15 0 15 -15 0 14.867 -15 0.133 -15 -15 0 14.867 -15 0.133 -14.867 -15 0.133 15 -15 30 14.867 -15 0.133 15 -15 0 14.867 -15 0.133 15 -15 30 14.867 -15 29.867 -14.867 -15 29.867 15 -15 30 -15 -15 30 15 -15 30 -14.867 -15 29.867 14.867 -15 29.867 -15 -15 30 -15 -15 0 -14.867 -15 0.133 -15 -15 30 -14.867 -15 0.133 -14.867 -15 29.867 15 -15 0 15 15 0 15 14.867 0.133 15 -15 0 15 14.867 0.133 15 -14.867 0.133 15 15 30 15 14.867 0.133 15 15 0 15 14.867 0.133 15 15 30 15 14.867 29.867 15 -14.867 29.867 15 15 30 15 -15 30 15 15 30 15 -14.867 29.867 15 14.867 29.867 15 -15 30 15 -15 0 15 -14.867 0.133 15 -15 30 15 -14.867 0.133 15 -14.867 29.867 15 15 0 -15 15 0 -14.867 15 0.133 15 15 0 -14.867 15 0.133 14.867 15 0.133 -15 15 30 -14.867 15 0.133 -15 15 0 -14.867 15 0.133 -15 15 30 -14.867 15 29.867 14.867 15 29.867 -15 15 30 15 15 30 -15 15 30 14.867 15 29.867 -14.867 15 29.867 15 15 30 15 15 0 14.867 15 0.133 15 15 30 14.867 15 0.133 14.867 15 29.867 -15 15 0 -15 -15 0 -15 -14.867 0.133 -15 15 0 -15 -14.867 0.133 -15 14.867 0.133 -15 -15 30 -15 -14.867 0.133 -15 -15 0 -15 -14.867 0.133 -15 -15 30 -15 -14.867 29.867 -15 14.867 29.867 -15 -15 30 -15 15 30 -15 -15 30 -15 14.867 29.867 -15 -14.867 29.867 -15 15 30 -15 15 0 -15 14.867 0.133 -15 15 30 -15 14.867 0.133 -15 14.867 29.867 -3.89829 -3.89829 0 -14.867 -14.867 0 -3.89829 3.89829 0 -14.867 -14.867 0 -14.867 14.867 0 -3.89829 3.89829 0 -14.867 14.867 0 14.867 14.867 0 3.89829 3.89829 0 -14.867 14.867 0 3.89829 3.89829 0 -3.89829 3.89829 0 14.867 14.867 0 14.867 -14.867 0 3.89829 -3.89829 0 14.867 14.867 0 3.89829 -3.89829 0 3.89829 3.89829 0 -14.867 -14.867 0 -3.89829 -3.89829 0 14.867 -14.867 0 14.867 -14.867 0 -3.89829 -3.89829 0 3.89829 -3.89829 0 -3.89829 -3.89829 0 -3.89829 3.89829 0 0 0 -18.021 -3.89829 3.89829 0 3.89829 3.89829 0 0 0 -18.021 3.89829 3.89829 0 3.89829 -3.89829 0 0 0 -18.021 3.89829 -3.89829 0 -3.89829 -3.89829 0 0 0 -18.021 14.867 -15 29.867 -14.867 -15 29.867 -14.867 -15 0.133 14.867 -15 29.867 -14.867 -15 0.133 14.867 -15 0.133 15 14.867 29.867 15 -14.867 29.867 15 -14.867 0.133 15 14.867 29.867 15 -14.867 0.133 15 14.867 0.133 -14.867 15 29.867 14.867 15 29.867 14.867 15 0.133 -14.867 15 29.867 14.867 15 0.133 -14.867 15 0.133 -15 -14.867 29.867 -15 14.867 29.867 -15 14.867 0.133 -15 -14.867 29.867 -15 14.867 0.133 -15 -14.867 0.133 </float_array>
     <technique_common>
      <accessor source="#ID2-array" count="210" stride="3">
       <param name="X" type="float"/>
       <param name="Y" type="float"/>
       <param name="Z" type="float"/>
      </accessor>
     </technique_common>
    </source>
    <source id="Untitled-mesh-normals">
     <float_array id="ID3-array" count="630">0 0 1 0 0 1 0 0 1 0 0 1 0 0 1 0 0 1 0 0 -1 0 0 -1 0 0 -1 0 0 -1 0 0 -1 0 0 -1 0 0 -1 0 0 -1 0 0 -1 0 0 -1 0 0 -1 0 0 -1 0 0 -1 0 0 -1 0 0 -1 0 0 -1 0 0 -1 0 0 -1 0 0 -1 0 0 -1 0 0 -1 0 0 -1 0 0 -1 0 0 -1 0 0 1 0 0 1 0 0 1 0 0 1 0 0 1 0 0 1 1.05167e-05 0 1 1.05167e-05 0 1 1.05167e-05 0 1 -3.08677e-05 0 1 -3.08677e-05 0 1 -3.08677e-05 0 1 0 0 1 0 0 1 0 0 1 0 0 1 0 0 1 0 0 1 -1.05167e-05 0 1 -1.05167e-05 0 1 -1.05167e-05 0 1 3.08677e-05 0 1 3.08677e-05 0 1 3.08677e-05 0 1 0 -1 -5.25835e-06 0 -1 -5.25835e-06 0 -1 -5.25835e-06 0 -1 1.54339e-05 0 -1 1.54339e-05 0 -1 1.54339e-05 0 -1 0 0 -1 0 0 -1 0 0 -1 0 0 -1 0 0 -1 0 0 -1 0 0 -1 0 0 -1 0 0 -1 -1.54339e-05 0 -1 -1.54339e-05 0 -1 -1.54339e-05 0 -1 0 0 -1 0 0 -1 0 0 -1 0 0 -1 0 0 -1 0 1 0 0 1 0 0 1 0 0 1 0 0 1 0 0 1 0 0 1 2.44991e-06 0 1 2.44991e-06 0 1 2.44991e-06 0 1 -1.92923e-06 0 1 -1.92923e-06 0 1 -1.92923e-06 0 1 0 0 1 0 0 1 0 0 1 0 0 1 0 0 1 0 0 1 -2.44991e-06 0 1 -2.44991e-06 0 1 -2.44991e-06 0 1 0 0 1 0 0 1 0 0 0 1 -5.25835e-06 0 1 -5.25835e-06 0 1 -5.25835e-06 0 1 1.54339e-05 0 1 1.54339e-05 0 1 1.54339e-05 0 1 0 0 1 0 0 1 0 0 1 0 0 1 0 0 1 0 0 1 0 0 1 0 0 1 0 0 1 -1.54339e-05 0 1 -1.54339e-05 0 1 -1.54339e-05 0 1 0 0 1 0 0 1 0 0 1 0 0 1 0 0 1 0 -1 0 0 -1 0 0 -1 0 0 -1 0 0 -1 0 0 -1 0 0 -1 -2.44991e-06 0 -1 -2.44991e-06 0 -1 -2.44991e-06 0 -1 1.92923e-06 0 -1 1.92923e-06 0 -1 1.92923e-06 0 -1 0 0 -1 0 0 -1 0 0 -1 0 0 -1 0 0 -1 0 0 -1 2.44991e-06 0 -1 2.44991e-06 0 -1 2.44991e-06 0 -1 0 0 -1 0 0 -1 0 0 0 0 -1 0 0 -1 0 0 -1 0 0 -1 0 0 -1 0 0 -1 0 0 -1 0 0 -1 0 0 -1 0 0 -1 0 0 -1 0 0 -1 0 0 -1 0 0 -1 0 0 -1 0 0 -1 0 0 -1 0 0 -1 0 0 -1 0 0 -1 0 0 -1 0 0 -1 0 0 -1 0 0 -1 -0.977394 0 -0.211429 -0.977394 0 -0.211429 -0.977394 0 -0.211429 0 0.977394 -0.211429 0 0.977394 -0.211429 0 0.977394 -0.211429 0.977394 0 -0.211429 0.977394 0 -0.211429 0.977394 0 -0.211429 0 -0.977394 -0.211429 0 -0.977394 -0.211429 0 -0.977394 -0.211429 0 -1 0 0 -1 0 0 -1 0 0 -1 0 0 -1 0 0 -1 0 1 0 0 1 0 0 1 0 0 1 0 0 1 0 0 1 0 0 0 1 0 0 1 0 0 1 0 0 1 0 0 1 0 0 1 0 -1 0 0 -1 0 0 -1 0 0 -1 0 0 -1 0 0 -1 0 0 </float_array>
     <technique_common>
      <accessor source="#ID3-array" count="210" stride="3">
       <param name="X" type="float"/>
       <param name="Y" type="float"/>
       <param name="Z" type="float"/>
      </accessor>
     </technique_common>
    </source>
    <source id="Untitled-mesh-map-0">
     <float_array id="ID4-array" count="420">0.995567 0.995566 0.00443357 0.995567 0.00443333 0.00443357 0.995567 0.995566 0.00443333 0.00443357 0.995566 0.00443333 1 2.98023e-07 1 1 0.995566 0.995567 1 2.98023e-07 0.995566 0.995567 0.995567 0.00443357 1 1 0 1 0.00443339 0.995566 1 1 0.00443339 0.995566 0.995566 0.995567 0 1 2.38419e-07 0 0.00443363 0.00443333 0 1 0.00443363 0.00443333 0.00443339 0.995566 2.38419e-07 0 1 2.98023e-07 0.995567 0.00443357 2.38419e-07 0 0.995567 0.00443357 0.00443363 0.00443333 0 2.98023e-07 1 0 0.995566 0.00443333 0 2.98023e-07 0.995566 0.00443333 0.00443333 0.00443357 1 0 1 1 0.995567 0.995566 1 0 0.995567 0.995566 0.995566 0.00443333 1 1 2.68221e-07 1 0.00443357 0.995567 1 1 0.00443357 0.995567 0.995567 0.995566 2.68221e-07 1 0 2.98023e-07 0.00443333 0.00443357 2.68221e-07 1 0.00443333 0.00443357 0.00443357 0.995567 0 0 1 0 0.995566 0.00443333 0 0 0.995566 0.00443333 0.00443333 0.00443333 1 1 0.995566 0.00443333 1 0 0.995566 0.00443333 1 1 0.995566 0.995567 0.00443333 0.995567 1 1 0 1 1 1 0.00443333 0.995567 0.995566 0.995567 0 1 0 0 0.00443333 0.00443333 0 1 0.00443333 0.00443333 0.00443333 0.995567 0 0 1 0 0.995566 0.00443333 0 0 0.995566 0.00443333 0.00443333 0.00443333 1 1 0.995566 0.00443333 1 0 0.995566 0.00443333 1 1 0.995566 0.995567 0.00443333 0.995567 1 1 0 1 1 1 0.00443333 0.995567 0.995566 0.995567 0 1 0 0 0.00443333 0.00443333 0 1 0.00443333 0.00443333 0.00443333 0.995567 0 0 1 0 0.995566 0.00443333 0 0 0.995566 0.00443333 0.00443339 0.00443333 1 1 0.995566 0.00443333 1 0 0.995566 0.00443333 1 1 0.995566 0.995567 0.00443339 0.995567 1 1 0 1 1 1 0.00443339 0.995567 0.995566 0.995567 0 1 0 0 0.00443339 0.00443333 0 1 0.00443339 0.00443333 0.00443339 0.995567 0 0 1 0 0.995566 0.00443333 0 0 0.995566 0.00443333 0.00443339 0.00443333 1 1 0.995566 0.00443333 1 0 0.995566 0.00443333 1 1 0.995566 0.995567 0.00443339 0.995567 1 1 0 1 1 1 0.00443339 0.995567 0.995566 0.995567 0 1 0 0 0.00443339 0.00443333 0 1 0.00443339 0.00443333 0.00443339 0.995567 0.629943 0.370057 0.995567 0.00443357 0.629943 0.629943 0.995567 0.00443357 0.995566 0.995567 0.629943 0.629943 0.995566 0.995567 0.00443339 0.995566 0.370057 0.629943 0.995566 0.995567 0.370057 0.629943 0.629943 0.629943 0.00443339 0.995566 0.00443363 0.00443333 0.370057 0.370057 0.00443339 0.995566 0.370057 0.370057 0.370057 0.629943 0.995567 0.00443357 0.629943 0.370057 0.00443363 0.00443333 0.00443363 0.00443333 0.629943 0.370057 0.370057 0.370057 0.629943 0 0.370057 0 0.5 -0.6007 0.629943 0 0.370057 0 0.5 -0.6007 0.629943 0 0.370057 0 0.5 -0.6007 0.629943 0 0.370057 0 0.5 -0.6007 0.995566 0.995567 0.00443333 0.995567 0.00443333 0.00443333 0.995566 0.995567 0.00443333 0.00443333 0.995566 0.00443333 0.995566 0.995567 0.00443333 0.995567 0.00443333 0.00443333 0.995566 0.995567 0.00443333 0.00443333 0.995566 0.00443333 0.995566 0.995567 0.00443339 0.995567 0.00443339 0.00443333 0.995566 0.995567 0.00443339 0.00443333 0.995566 0.00443333 0.995566 0.995567 0.00443339 0.995567 0.00443339 0.00443333 0.995566 0.995567 0.00443339 0.00443333 0.995566 0.00443333 </float_array>
     <technique_common>
      <accessor source="#ID4-array" count="210" stride="2">
       <param name="S" type="float"/>
       <param name="T" type="float"/>
      </accessor>
     </technique_common>
    </source>
    <vertices id="Untitled-mesh-positions-vertices">
     <input semantic="POSITION" source="#Untitled-mesh-positions"/>
    </vertices>
    <triangles count="62" material="geometryElement5">
     <input semantic="VERTEX" offset="0" source="#Untitled-mesh-positions-vertices"/>
     <input semantic="NORMAL" offset="0" source="#Untitled-mesh-normals"/>
     <input semantic="TEXCOORD" offset="0" source="#Untitled-mesh-map-0" set="1"/>
     <p>0 1 2 3 4 5 6 7 8 9 10 11 12 13 14 15 16 17 18 19 20 21 22 23 24 25 26 27 28 29 30 31 32 33 34 35 36 37 38 39 40 41 42 43 44 45 46 47 48 49 50 51 52 53 54 55 56 57 58 59 60 61 62 63 64 65 66 67 68 69 70 71 72 73 74 75 76 77 78 79 80 81 82 83 84 85 86 87 88 89 90 91 92 93 94 95 96 97 98 99 100 101 102 103 104 105 106 107 108 109 110 111 112 113 114 115 116 117 118 119 120 121 122 123 124 125 126 127 128 129 130 131 132 133 134 135 136 137 138 139 140 141 142 143 144 145 146 147 148 149 150 151 152 153 154 155 156 157 158 159 160 161 162 163 164 165 166 167 168 169 170 171 172 173 174 175 176 177 178 179 180 181 182 183 184 185 </p>
    </triangles>
    <triangles count="2" material="geometryElement6">
     <input semantic="VERTEX" offset="0" source="#Untitled-mesh-positions-vertices"/>
     <input semantic="NORMAL" offset="0" source="#Untitled-mesh-normals"/>
     <input semantic="TEXCOORD" offset="0" source="#Untitled-mesh-map-0" set="1"/>
     <p>186 187 188 189 190 191 </p>
    </triangles>
    <triangles count="2" material="geometryElement7">
     <input semantic="VERTEX" offset="0" source="#Untitled-mesh-positions-vertices"/>
     <input semantic="NORMAL" offset="0" source="#Untitled-mesh-normals"/>
     <input semantic="TEXCOORD" offset="0" source="#Untitled-mesh-map-0" set="1"/>
     <p>192 193 194 195 196 197 </p>
    </triangles>
    <triangles count="2" material="geometryElement8">
     <input semantic="VERTEX" offset="0" source="#Untitled-mesh-positions-vertices"/>
     <input semantic="NORMAL" offset="0" source="#Untitled-mesh-normals"/>
     <input semantic="TEXCOORD" offset="0" source="#Untitled-mesh-map-0" set="1"/>
     <p>198 199 200 201 202 203 </p>
    </triangles>
    <triangles count="2" material="geometryElement9">
     <input semantic="VERTEX" offset="0" source="#Untitled-mesh-positions-vertices"/>
     <input semantic="NORMAL" offset="0" source="#Untitled-mesh-normals"/>
     <input semantic="TEXCOORD" offset="0" source="#Untitled-mesh-map-0" set="1"/>
     <p>204 205 206 207 208 209 </p>
    </triangles>
   </mesh>
  </geometry>
 </library_geometries>
 <library_visual_scenes>
  <visual_scene id="scene10">
   <node id="Box001" name="Box001">
    <matrix>0.001 0 0 0 0 0.001 4.371141e-11 0 0 -4.371141e-11 0.001 0 0 0 0 1 </matrix>
    <instance_geometry url="#geometry1">
     <bind_material>
      <technique_common>
       <instance_material symbol="geometryElement5" target="#_1_-_Default-material"/>
       <instance_material symbol="geometryElement6" target="#Material__36-material"/>
       <instance_material symbol="geometryElement7" target="#Material__40-material"/>
       <instance_material symbol="geometryElement8" target="#Material__41-material"/>
       <instance_material symbol="geometryElement9" target="#Material__42-material"/>
      </technique_common>
     </bind_material>
    </instance_geometry>
   </node>
  </visual_scene>
 </library_visual_scenes>
 <scene>
  <instance_visual_scene url="#scene10"/>
 </scene>
</COLLADA>
`;

export default data;