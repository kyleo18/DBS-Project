-- Script Date: 12/2/2023 9:11 PM  - ErikEJ.SqlCeScripting version 3.5.2.95
SELECT [Id]
      ,[Type]
      ,[Manufacturer]
      ,[Model]
      ,[Doors]
  FROM [Cars]
  where doors <= 2;
