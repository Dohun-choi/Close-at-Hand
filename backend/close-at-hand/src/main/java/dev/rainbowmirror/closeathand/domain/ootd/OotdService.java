package dev.rainbowmirror.closeathand.domain.ootd;

import dev.rainbowmirror.closeathand.domain.clothes.Clothes;
import dev.rainbowmirror.closeathand.domain.clothes.ClothesListInfo;

import java.io.IOException;
import java.util.List;
import java.util.Optional;

public interface OotdService {
    List<OotdInfo> getOotds(String userToken);
    OotdInfo.Detail getOotd(Long ootdId);
    OotdInfo.Detail getTodayOotd(String userToken);
    OotdInfo saveOotd(OotdCommand.CreateCommand command) throws IOException;
    void deleteOotd(Long ootdId);
    List<ClothesListInfo> getMostUsedClothes(String userToken);
}
