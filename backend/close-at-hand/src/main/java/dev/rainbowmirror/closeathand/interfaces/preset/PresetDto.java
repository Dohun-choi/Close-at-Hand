package dev.rainbowmirror.closeathand.interfaces.preset;

import dev.rainbowmirror.closeathand.domain.clothes.Clothes;
import dev.rainbowmirror.closeathand.domain.clothes.ClothesInfo;
import dev.rainbowmirror.closeathand.domain.preset.PresetCommand;
import dev.rainbowmirror.closeathand.domain.preset.PresetInfo;
import jakarta.validation.constraints.NotEmpty;
import lombok.Getter;
import lombok.Setter;
import lombok.ToString;
import org.springframework.web.multipart.MultipartFile;

import java.util.Set;

public class PresetDto {
    @Getter
    @Setter
    @ToString
    public static class InsertRequestDto{
        private String presetName;
        private Long[] clothesIdList;
//        private MultipartFile presetImg;

        public PresetCommand.InsertCommand toCommand(String userToken, MultipartFile presetImg){
            return PresetCommand.InsertCommand.builder()
                    .presetName(presetName)
                    .clothesIdList(clothesIdList)
                    .presetImg(presetImg)
                    .userToken(userToken)
                    .build();
        }
    }

    @Getter
    @Setter
    @ToString
    public static class InsertResponseDto{
        private final Long presetId;
        private final String presetImgUrl;
        private final String presetName;
        private final Set<ClothesInfo> clothes;

        public InsertResponseDto(PresetInfo presetInfo){
            this.presetId = presetInfo.getPresetId();
            this.presetImgUrl = presetInfo.getPresetImgUrl();
            this.presetName = presetInfo.getPresetName();
            this.clothes = presetInfo.getClothes();
        }
    }
    @Getter
    @Setter
    @ToString
    public static class UpdateRequestDto{
        private Long presetId;
        private Long[] clothesIdList;

    }
}
