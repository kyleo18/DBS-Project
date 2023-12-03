-- Script Date: 12/2/2023 7:37 PM  - ErikEJ.SqlCeScripting version 3.5.2.95
CREATE TABLE [Cars] (
  [Id] INTEGER NOT NULL
, [Type] TEXT NOT NULL
, [Manufacturer] TEXT NOT NULL
, [Model] TEXT NOT NULL
, [Doors] INTEGER NOT NULL
, CONSTRAINT [PK_Cars] PRIMARY KEY ([Id])
);
