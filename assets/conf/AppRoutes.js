import {
  CustomerList,
  CustomerDetails,
  CustomerNew,
} from "../features/customer";
import { Route, Routes, useParams } from "react-router-dom";
import {
  SessionPlaceDetails,
  SessionPlacesList,
  SessionPlaceNew,
  SessionTypeNew,
  SessionTypesList,
  SessionTypeDetails,
  SessionNew,
  SessionsList,
  SessionDetails,
} from "../features/session";
import { ItemList, ItemNew, ItemDetails } from "../features/item";
import { BillList, BillDetails, BillGenerate } from "../features/bill";
import React from "react";

export default function AppRoutes() {
  return (
    <Routes>
      {/* défini toutes les routes de l'app */}
      {/* Customers */}
      <Route path="/customers" element={<CustomerList />} />
      <Route
        path="/customer/:id"
        element={<CustomerDetails path={useParams()} />}
      />
      <Route path="/new-customers" element={<CustomerNew />} />
      {/* Session Place */}
      <Route path="/session-places" element={<SessionPlacesList />} />
      <Route
        path="/session-place/:id"
        element={<SessionPlaceDetails path={useParams()} />}
      />
      <Route path="/new-session-place" element={<SessionPlaceNew />} />
      {/* Session Type */}
      <Route path="/session-types" element={<SessionTypesList />} />
      <Route
        path="/session-type/:id"
        element={<SessionTypeDetails path={useParams()} />}
      />
      <Route path="/new-session-type" element={<SessionTypeNew />} />
      {/* Session */}
      <Route path="/sessions" element={<SessionsList />} />
      <Route
        path="/session/:id"
        element={<SessionDetails path={useParams()} />}
      />
      <Route path="/new-session" element={<SessionNew />} />
      {/* Items */}
      <Route path="/items" element={<ItemList />} />
      <Route path="/item/:id" element={<ItemDetails path={useParams()} />} />
      <Route path="/new-item" element={<ItemNew />} />
      {/* bills */}
      <Route path="/bills" element={<BillList />} />
      <Route path="/bill/:id" element={<BillDetails path={useParams()} />} />
      <Route path="/generate-bill" element={<BillGenerate />} />
    </Routes>
  );
}
